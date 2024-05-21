import React, { useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Button, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import questionsData from './questionsData';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    width: '80%',
    maxWidth: 800,
    margin: '0 auto',
    padding: theme.spacing(3),
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: theme.spacing(2),
  },
  questionContainer: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    border: '1px solid #ddd',
    borderRadius: theme.spacing(1),
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column', // Display child elements in a column layout
  },
  questionText: {
    marginBottom: theme.spacing(1),
  },
}));

const CareerGuidanceForm = () => {
  const classes = useStyles();
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value === 'Yes',
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log( answers);
    axios.post("http://localhost:3001/form",answers).then((e) =>{
      console.log(e.data);
    })

    // Add logic to handle form submission
  };

  return (
    <form className={classes.formContainer} onSubmit={handleSubmit}>
      <Typography variant="h5" align="center" gutterBottom>
        Career Guidance Form
      </Typography>
      {questionsData.map((question, index) => (
        <Paper key={question.id} elevation={3} className={classes.questionContainer}>
          <Typography variant="body1" className={classes.questionText}>
            {index + 1}. {question.question}
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label={`question${question.id}`}
              name={`question${question.id}`}
              value={answers[`question${question.id}`] ? 'Yes' : 'No'}
              onChange={handleAnswerChange}
            >
              <FormControlLabel
                value="Yes"
                control={<Radio color="primary" />}
                label="Yes"
                labelPlacement="end" // Align label (radio button) to the right
              />
              <FormControlLabel
                value="No"
                control={<Radio color="primary" />}
                label="No"
                labelPlacement="end" // Align label (radio button) to the right
              />
            </RadioGroup>
          </FormControl>
        </Paper>
      ))}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </form>
  );
};

export default CareerGuidanceForm;
