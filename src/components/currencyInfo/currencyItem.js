import  React  from 'react';
import { makeStyles ,Button } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '90%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

    let data=props.props.item;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{margin:"1rem "}} className={classes.root}>
      <Accordion expanded={expanded === `panel${data.ID}`} onChange={handleChange(`panel${data.ID}`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${data.ID}bh-content`}
          id={`panel${data.ID}bh-header`}
        >
          <Typography  className={classes.heading}>{data.Name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {(data.Value/data.Nominal).toFixed(3)+' рублей'}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}




