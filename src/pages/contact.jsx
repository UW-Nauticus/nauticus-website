import React, { useState } from 'react';
import Router from 'next/router';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { Alert, AlertTitle } from '@mui/material';

import MKBox from '../components/common/MKBox';
import MKTypography from '../components/common/MKTypography';
import ContactForm from '../components/screens/contact/ContactForm';

// Images
const bgImage = '/images/background/contact.jpg';

function Contact() {
  const [form, setForm] = useState({});
  const [showAlert, setShowAlert] = useState(null);
  const [alertType, setAlertType] = useState(null);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = ['name', 'email', 'subject', 'message'];
    const missingFields = [];

    fields.forEach((field) => {
      if (form[field] === undefined) {
        missingFields.push(field);
      }
    });

    if (missingFields.length > 0) {
      setAlertType('error');
      setShowAlert(`Missing required field(s): ${missingFields.join(', ')}`);
      return;
    }

    try {
      await axios.post('/api/contact', form);
      setAlertType('success');
      setShowAlert('Message sent!');
    } catch (error) {
      setAlertType('error');
      setShowAlert('An error occurred. Please try again.');
    }
  };

  return (
    <MKBox
      minHeight="100vh"
      width="100%"
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(rgba(gradients.primary.main, 0.2), rgba(gradients.primary.state, 0.7))}, url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'grid',
        placeItems: 'center',
        py: { xs: 20, sm: 10, md: 0 },
      }}
    >
      <MKBox width="100%" mx="auto" position="relative">
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={6}>
            <Card>
              <MKBox bgColor="primary" coloredShadow="primary" borderRadius="lg" p={2} mx={2} mt={-3}>
                <MKTypography variant="h3" color="white">
                  Contact us
                </MKTypography>
              </MKBox>
              <MKBox p={3}>
                <MKTypography variant="body2" mb={3}>
                  You can send us an email by filling out the form below. Follow us on Social Media for updates!
                </MKTypography>
                <ContactForm handleSubmit={handleSubmit} handleChange={handleChange} alertType={alertType} />
                <MKBox height={0}>
                  {showAlert && (
                    <MKBox pt={4}>
                      <Alert
                        variant="outlined"
                        severity={alertType}
                        sx={{
                          backgroundColor: 'rgba(0,0,0,0.9)',
                          color: ({ palette: { success, error } }) =>
                            alertType === 'success' ? `${success.main}` : `${error.main}`,
                        }}
                        onClose={() => {
                          setShowAlert(null);
                          if (alertType === 'success') {
                            Router.reload();
                          }
                        }}
                      >
                        <AlertTitle>{alertType.charAt(0).toUpperCase() + alertType.slice(1)}</AlertTitle>
                        {showAlert}
                      </Alert>
                    </MKBox>
                  )}
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
    </MKBox>
  );
}

export default Contact;
