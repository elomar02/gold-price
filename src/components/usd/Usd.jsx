import { React, useEffect } from "react";
import { Grid, List } from "@mui/material";

import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";
// import doller from '../../assets/imgs/dollartransparent.png'

const Usd = ({ gold ,exchange }) => {
  const dates = gold.date;
  useEffect(() => {}, [gold]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <List>
            <ListItem disablePadding>
              <ListItemText className="heading" primary="Gold price in united states" />
            </ListItem>
            {/* end box */}
            <ListItem disablePadding>
              <ListItemText primary={dates.substring(0, dates.length - 2)} />
            </ListItem>

            {gold.items.map((price,i) => {
              const { xauPrice, chgXau, pcXau } = price;
              return (
                <div  key="{i}">
                  <ListItem  disablePadding>
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
          <List className="useClass">            
              <ListItem disablePadding>
              <ListItemText className="heading" primary="Exchange 1 dollar" />
              {/* <img src={doller} alt="" /> */}
            </ListItem>
            {/* end box */}

            <ListItem disablePadding>
              <ListItemText primary={exchange.quotes.USDEGP.toFixed(2)} />
              <ListItemText primary="Egyptian pound" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary={exchange.quotes.USDSAR.toFixed(2)} />
              <ListItemText primary="Saudi riyal" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary={exchange.quotes.USDAED.toFixed(2)} />
              <ListItemText primary="Emirates dirham" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary={exchange.quotes.USDTRY.toFixed(2)} />
              <ListItemText primary="Turkish lira" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default Usd;
