import React from 'react';
import Grid from '@mui/material/Grid';

import MKBox from '../../common/MKBox';
import MKInput from '../../common/MKInput';
import MKButton from '../../common/MKButton';

function ContactForm(props) {
  // eslint-disable-next-line react/prop-types
  const { handleSubmit, handleChange, alertType } = props;
  return (
    <MKBox width="100%" component="form" autocomplete="off" method="post" onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <MKInput
            name="name"
            onChange={handleChange}
            variant="standard"
            label="Name"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MKInput
            name="email"
            onChange={handleChange}
            type="email"
            variant="standard"
            label="Email"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <MKInput
            name="subject"
            onChange={handleChange}
            variant="standard"
            label="Subject"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <MKInput
            name="message"
            onChange={handleChange}
            variant="standard"
            label="How can we help you?"
            placeholder="Your Message"
            InputLabelProps={{
              shrink: true,
            }}
            multiline
            fullWidth
            rows={6}
          />
        </Grid>
      </Grid>
      <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
        <MKButton
          type="submit"
          color={alertType === 'success' ? 'secondary' : 'primary'}
          disabled={alertType === 'success'}
        >
          Send Message
        </MKButton>
      </Grid>
    </MKBox>
  );
}

export default ContactForm;
