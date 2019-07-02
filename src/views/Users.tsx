import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";
import isEqual from "lodash.isequal";

import {
  makeStyles,
  createStyles
} from "@material-ui/styles";
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

const useStyles = makeStyles(createStyles({
  table: {
    whiteSpace: "nowrap"
  },
  sortableColumn: {
    cursor: "pointer"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  search: {
    minWidth: 100
  }
}));

interface ISortColumn {
  name: string,
  direction: string
}

interface IFilterColumn {
  name: string,
  value: string
}

const Users: React.FunctionComponent<RouteComponentProps> = () => {
  const classes = useStyles({});
  const [sortBy, setSortBy] = React.useState<ISortColumn[]>([{ name: "companyName", direction: "asc" }]);
  const [filters, setFilters] = React.useState<IFilterColumn[]>([]);

  React.useEffect(() => {
    getUsers();
  }, []);

  function onHeaderClick(e: React.MouseEvent, columnName: string) {
    e.stopPropagation();

    const sortColumn = sortBy.find(sc => sc.name === columnName);

    // NOTE: This assumes one column can be sorted but could be extended to sort multiple columns
    // The column was already sorted, flip the sort direction
    if (sortColumn) {
      const { direction: currentSortDirection } = sortColumn;
      setSortBy([{ ...sortColumn, direction: currentSortDirection === "asc" ? "desc" : "asc" }]);
       return;
    }

    setSortBy([{ name: columnName, direction: "asc" }]);
  }

  function onHeaderFilterClick(e: React.MouseEvent) {
    // Stop clicking in the filter TextField from changing sort direction
    e.stopPropagation();
  }

  function onHeaderFilterChange(e: React.ChangeEvent<HTMLInputElement>, columnName: string) {
    // NOTE: This assumes one column can be filtered but could be extended to sort multiple columns
    const { value } = e.target;

    if (value && value.length > 0) {
      setFilters([{ name: columnName, value }]);
      return;
    }

    setFilters([]);
  }

  const usersState = useSelector<IApplicationState, IUsersState>(state => state.usersState, isEqual);

  const {
    fetching,
    fetchError,
    users
  } = usersState;

  if (fetchError) {
    return <ErrorMessage text={fetchError} />;
  }

  if (fetching) {
    return <Progress />;
  }

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
              onClick={(e: React.MouseEvent) => onHeaderClick(e, "companyName")}
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
                  className={classes.search}
                  placeholder="Search"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  onClick={e => onHeaderFilterClick(e)}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => onHeaderFilterChange(e, "companyName")}
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
                  <TableCell>{companyName}</TableCell>
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

export default Users;
