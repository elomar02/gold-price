import { React, useEffect } from "react";
import { Grid, List } from "@mui/material";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Egp = ({ gold, exchange }) => {
  const dates = gold.date;
  const {USDEGP,USDSAR,USDAED,USDTRY} = exchange.quotes
  useEffect(() => {}, []);

  return (
     
 
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <List className="gold">
            <ListItem disablePadding>
              <ListItemText className="heading" primary="Gold price in Egypt" />
            </ListItem>
            {/* end box */}
            <ListItem disablePadding>
              <ListItemText primary={dates.substring(0, dates.length - 2)} />
            </ListItem>

            {gold.items.map((price,i) => {
              const { xauPrice, chgXau, pcXau } = price;
              return (
                <div  key="{i}">
                  <ListItem disablePadding>
                    <ListItemText primary="kilogram" />
                    <ListItemText
                      primary={((xauPrice / 31.1) * 1000).toFixed(0)}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary="ounce" />
                    <ListItemText primary={xauPrice.toFixed(0)} />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary="gram" />
                    <ListItemText primary={(xauPrice / 31.1).toFixed(0)} />
                  </ListItem>
                </div>
              );
            })}

            {/* end box */}
          </List>
        </Grid>
        {/* end section grid */}

        <Grid item xs={12} md={4}>
          <List className="pound">
          <ListItem disablePadding>
              <ListItemText className="heading" primary="Exchange 1 pound " />
            </ListItem>
            {/* end box */}
             
            <ListItem disablePadding>
              <ListItemText primary={USDEGP.toFixed(0)} />
              <ListItemText primary="dollar" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary={(USDSAR / USDEGP).toFixed(3)} />
              <ListItemText primary="Saudi riyal" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary={(USDAED / USDEGP).toFixed(3)} />
              <ListItemText primary="Emirates dirham" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary={(USDTRY / USDEGP).toFixed(3)} />
              <ListItemText primary="Turkish lira" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default Egp;
