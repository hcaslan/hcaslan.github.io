import React, {ChangeEvent, FormEvent, forwardRef, ForwardRefRenderFunction, useState} from 'react';
import { Container, TextField, Button, Typography, Grid, Box } from '@mui/material';
import emailjs from 'emailjs-com';
import ThemeElement from "../atoms/ThemeElement";

const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
        '& fieldset': {// default border color
        },
        '&:hover fieldset': {
            borderColor: 'paletteSecondColour.main', // border color on hover
        },
        '&.Mui-focused fieldset': {
            borderColor: 'paletteFirstColour.main', // border color when focused
        },
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: 'paletteSecondColour.main', // label color when focused
    },
};

const ContactSection = forwardRef<HTMLDivElement>((props, ref) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const serviceId = 'service_76anlkf';
        const templateId = 'template_et4c9df';
        const publicKey  = 'ZtF595dUOnMwagvlX';

        emailjs.send(serviceId, templateId, formData, publicKey )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            })
            .catch((err) => {
                console.log('FAILED...', err);
                alert('Failed to send message, please try again later.');
            });
    };

    return (
        <ThemeElement>
            <Container ref={ref} sx={{ py: 8, minHeight: '100vh' }} maxWidth="lg">
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
                    <Box sx={{ flexGrow: 1, borderBottom: '2px solid', borderColor: 'paletteThirdColour.main' }} />
                    <Typography variant="h4" sx={{ mx: 2, color: 'paletteThirdColour.main' }}>
                        Contact Me
                    </Typography>
                    <Box sx={{ flexGrow: 1, borderBottom: '2px solid', borderColor: 'paletteThirdColour.main' }} />
                </Box>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                required
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                sx={textFieldStyle}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                required
                                name="email"
                                type="email"
                                value={formData.email}
                                sx={textFieldStyle}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Subject"
                                variant="outlined"
                                fullWidth
                                name="subject"
                                value={formData.subject}
                                sx={textFieldStyle}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Message"
                                variant="outlined"
                                fullWidth
                                required
                                multiline
                                rows={5}
                                name="message"
                                sx={textFieldStyle}
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Box display="flex" justifyContent="center">
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: 'paletteSecondColour.main',
                                        color: 'paletteForthColour.main',
                                        ":hover": { backgroundColor: 'paletteFirstColour.main', color: 'paletteSecondColour.main' }
                                    }}
                                    fullWidth type="submit">
                                    Send Message
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </ThemeElement>
    );
});

export default ContactSection;
