import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import TextField from "@material-ui/core/TextField";
import { FormControlLabel, makeStyles } from "@material-ui/core";
// import { Block } from "@material-ui/icons";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    
  },
});

const Create = () => {
  const classes = useStyles();
  const history = useHistory()

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("todo");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, details, category })
      }).then(() => history.push('/'))
    }
  };
  return (
    <Container size="sm">
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        color="secondary"
      >
        Create a new note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="note title"
          color="secondary"
          variant="outlined"
          required
          fullWidth
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="note title"
          color="secondary"
          variant="outlined"
          required
          multiline
          fullWidth
          rows={4}
        />
        <FormControl className={classes.field}>
          <FormLabel>Note category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" label="money" control={<Radio />} />
            <FormControlLabel value="todo" label="todo" control={<Radio />} />
            <FormControlLabel value="WOrk" label="WOrk" control={<Radio />} />
          </RadioGroup>
        </FormControl>
<br/>
        <Button
        className={classes.field}
          type="submit"
          color="secondary"
          variant="contained"
        
          endIcon={<ArrowForwardIosOutlinedIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};
export default Create;
