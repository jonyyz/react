import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import {
  createStyles,
  withStyles
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import ScrollableContainer from "../components/ScrollableContainer";
import ErrorMessage from "../components/ErrorMessage";
import Progress from "../components/Progress";

import { IApplicationState } from "../store";
import {
  IUsersState,
  IUserBasicInfo
} from "../store/users/types";
import getUsers from "../actions/getUsers";

const styles = createStyles({
  sortableColumn: {
    cursor: "pointer"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }
});

interface IProps extends RouteComponentProps {
  classes: Record<string, string>,
  usersState: IUsersState
}

interface ISortColumn {
  name: string,
  direction: string
}

interface IFilterColumn {
  name: string,
  value: string
}

interface IState {
  sortBy: ISortColumn[],
  filters: IFilterColumn[]
  usersState?: IUsersState
}

class Users extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      sortBy: [{ name: "companyName", direction: "asc" }],
      filters: []
    };
  }

  componentDidMount() {
    getUsers();
  }

  onHeaderClick = (e: React.MouseEvent, columnName: string) => {
    e.stopPropagation();

    const sortColumn = this.state.sortBy.find(sc => sc.name === columnName);

    // NOTE: This assumes one column can be sorted but could be extended to sort multiple columns
    // The column was already sorted, flip the sort direction
    if (sortColumn) {
      const { direction: currentSortDirection } = sortColumn;
      this.setState({ sortBy: [{ ...sortColumn, direction: currentSortDirection === "asc" ? "desc" : "asc" }] });
       return;
    }

    this.setState({ sortBy: [{ name: columnName, direction: "asc" }] });
  }

  onHeaderFilterClick = (e: React.MouseEvent) => {
    // Stop clicking in the filter TextField from changing sort direction
    e.stopPropagation();
  }

  onHeaderFilterChange = (e: React.ChangeEvent<HTMLInputElement>, columnName: string) => {
    // NOTE: This assumes one column can be filtered but could be extended to sort multiple columns
    const { value } = e.target;

    if (value && value.length > 0) {
      this.setState({ filters: [{ name: columnName, value }] });
      return;
    }

    this.setState({ filters: [] });
  }

  render() {
    const {
      classes,
      usersState: {
        fetching,
        fetchError,
        users
      }
    } = this.props;

    if (fetchError) {
      return <ErrorMessage text={fetchError} />;
    }

    if (fetching) {
      return <Progress />;
    }

    const {
      sortBy,
      filters
    } = this.state;

    let transformedUsers = users;

    if (sortBy.length > 0) {
      const { direction } = sortBy[0];
      transformedUsers = users.sort(
        (a: IUserBasicInfo, b: IUserBasicInfo) => {
          return direction === "asc" ?
            a.companyName.localeCompare(b.companyName) :
            b.companyName.localeCompare(a.companyName)
        }
      );
    }

    if (filters && filters.length > 0) {
      const value = filters[0].value.toLowerCase();
      transformedUsers = transformedUsers.filter(user => user.companyName.toLowerCase().includes(value));
    }

    return (
      <ScrollableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell
                className={classes.sortableColumn}
                onClick={(e: React.MouseEvent) => this.onHeaderClick(e, "companyName")}
              >
                <div className={classes.header}>
                  Company Name&nbsp;
                  {
                    sortBy.length > 0 &&
                    (
                      sortBy[0].direction === "asc" ?
                      <ArrowDropDownIcon /> :
                      <ArrowDropUpIcon />
                    )
                  }
                  <TextField
                    placeholder="Search"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    onClick={e => this.onHeaderFilterClick(e)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onHeaderFilterChange(e, "companyName")}
                  />
                </div>
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>City</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transformedUsers.map(
              user => {
                const {
                  id,
                  name,
                  website,
                  city,
                  companyName
                } = user;

                return (
                  <TableRow key={id}>
                    <TableCell component="th" scope="row">{companyName}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{website}</TableCell>
                    <TableCell>{city}</TableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </ScrollableContainer>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => {
  return {
    usersState: state.usersState
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(Users);
