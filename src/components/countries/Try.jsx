import { React, useEffect } from "react";
import { Grid, List } from "@mui/material";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Try = ({ gold, exchange }) => {
  const dates = gold.date;
  const {USDEGP,USDSAR,USDAED,USDTRY} = exchange.quotes
  useEffect(() => {}, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <List>
            <ListItem disablePadding>
              <ListItemText className="heading" primary="Gold price in Turkish" />
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
          <List className='liraClass'>
          <ListItem disablePadding>
              <ListItemText className="heading" primary="Exchange 1 lira " />
            </ListItem>
            {/* end box */}
             
            <ListItem disablePadding>
              <ListItemText primary={(1 / USDTRY).toFixed(3)} />
              <ListItemText primary="dollar" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary={(USDEGP / USDTRY ).toFixed(3)} />
              <ListItemText primary="Egyptian Pound" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary={(USDSAR / USDTRY).toFixed(3)} />
              <ListItemText primary="Saudi riyal" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary={(USDAED / USDTRY).toFixed(3)} />
              <ListItemText primary="Emirates dirham" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default Try;
