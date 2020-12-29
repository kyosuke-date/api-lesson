import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncGetZipcode,
  selectAreaname,
  selectCityname,
  selectPrefname,
  selectZipcode,
  selectAlert,
} from "./zipcodeSlice";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { AiOutlineSearch } from "react-icons/ai";
import { TableBody } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
  fle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  cen: {
    marginTop: 20,
  },
}));

const GetZip = () => {
  const classes = useStyles();

  const prefname = useSelector(selectPrefname);
  const cityname = useSelector(selectCityname);
  const areaname = useSelector(selectAreaname);
  const zipcode = useSelector(selectZipcode);
  const alert = useSelector(selectAlert);
  const dispatch = useDispatch();

  const [prefName, setPrefName] = useState("");
  const [cityName, setCityName] = useState("");
  const [areaName, setAreaName] = useState("");
  const [zip, setZip] = useState("");

  useEffect(() => {
    setPrefName(prefname);
    setCityName(cityname);
    setAreaName(areaname);
  }, [zipcode]);

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell align="left">
            <TextField
              label="Please Enter Zip Code"
              id="margin-none0"
              className={classes.textField}
              helperText="Enter Without hyphen"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={() => dispatch(fetchAsyncGetZipcode(zip))}
              className={classes.cen}
            >
              <AiOutlineSearch />
            </Button>
            {alert && (
              <p style={{ color: "red", padding: 0, margin: 0 }}>
                {zipcode} is {alert}
              </p>
            )}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="left">
            <TextField
              label="Address1"
              id="margin-none1"
              className={classes.textField}
              helperText="Some important text"
              value={prefName}
              onChange={(e) => setPrefName(e.target.value)}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="left">
            <TextField
              label="Address2"
              id="margin-none2"
              className={classes.textField}
              helperText="Some important text"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="left">
            <TextField
              id="standard-full-width"
              label="Address3"
              style={{ margin: 8, width: "80vw" }}
              placeholder="Address"
              helperText="Auto Enter Function"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              value={areaName}
              onChange={(e) => setAreaName(e.target.value)}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">
            <Button variant="contained">Regist</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default GetZip;
