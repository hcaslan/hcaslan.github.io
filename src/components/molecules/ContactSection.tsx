import React, { ChangeEvent, FormEvent, forwardRef, useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  IconButton,
  Chip,
  Paper,
  Divider,
} from "@mui/material";
import {
  Email,
  LinkedIn,
  GitHub,
  Phone,
  LocationOn,
  Send,
  CheckCircle,
  Error,
} from "@mui/icons-material";
import emailjs from "emailjs-com";
import ThemeElement from "../atoms/ThemeElement";

const textFieldStyle = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 2,
    "& fieldset": {
      borderColor: "rgba(37, 42, 52, 0.3)",
      borderWidth: 2,
    },
    "&:hover fieldset": {
      borderColor: "paletteThirdColour.main",
      borderWidth: 2,
    },
    "&.Mui-focused fieldset": {
      borderColor: "paletteFirstColour.main",
      borderWidth: 2,
    },
    "& input, & textarea": {
      color: "paletteSecondColour.main",
      fontWeight: 500,
    },
  },
  "& .MuiInputLabel-root": {
    color: "paletteSecondColour.main",
    fontWeight: 600,
    "&.Mui-focused": {
      color: "paletteFirstColour.main",
      fontWeight: 700,
    },
  },
};

const ContactSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const serviceId = "service_76anlkf";
    const templateId = "template_et4c9df";
    const publicKey = "ZtF595dUOnMwagvlX";

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        formData,
        publicKey
      );
      console.log("SUCCESS!", response.status, response.text);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.log("FAILED...", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Email />,
      label: "Email",
      value: "hcaslan.ozen@gmail.com",
      color: "paletteThirdColour.main",
      href: "mailto:hcaslan.ozen@gmail.com",
    },
    {
      icon: <LinkedIn />,
      label: "LinkedIn",
      value: "/hcaslanozen",
      color: "paletteFirstColour.main",
      href: "https://www.linkedin.com/in/hcaslanozen/",
    },
    {
      icon: <GitHub />,
      label: "GitHub",
      value: "@hcaslan",
      color: "paletteSecondColour.main",
      href: "https://github.com/hcaslan",
    },
    {
      icon: <LocationOn />,
      label: "Location",
      value: "Ankara, TURKIYE",
      color: "paletteThirdColour.main",
      href: "https://www.google.com/maps/place/Ankara,+TURKIYE",
    },
  ];

  return (
    <ThemeElement>
      <Container ref={ref} sx={{ py: 8, minHeight: "100vh" }} maxWidth="lg">
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 6,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              borderBottom: "3px solid",
              borderColor: "paletteThirdColour.main",
            }}
          />
          <Typography
            variant="h3"
            sx={{
              mx: 4,
              color: "paletteThirdColour.main",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Get In Touch
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              borderBottom: "3px solid",
              borderColor: "paletteThirdColour.main",
            }}
          />
        </Box>

        {/* Subtitle */}
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: "paletteSecondColour.main",
            mb: 6,
            maxWidth: "600px",
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Ready to collaborate on your next project? Let's discuss how we can
          bring your ideas to life together.
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Information Card */}
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                background: "linear-gradient(135deg, #252A34 0%, #1a1f26 100%)",
                color: "white",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background:
                    "linear-gradient(90deg, #08D9D6, #FF2E63, #08D9D6)",
                },
              }}
            >
              <CardContent sx={{ p: 4, pt: 5 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    background: "linear-gradient(45deg, #08D9D6, #FF2E63)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Let's Connect
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ mb: 4, opacity: 0.9, lineHeight: 1.7 }}
                >
                  I'm always excited to discuss new opportunities, innovative
                  projects, and potential collaborations. Whether you have a
                  question, a project idea, or just want to say hello, I'd love
                  to hear from you.
                </Typography>

                <Box sx={{ space: 3 }}>
                  {contactInfo.map((info, index) => (
                    <Box
                      key={index}
                      onClick={() => {
                        if (info.href) {
                          window.open(info.href, "_blank");
                        }
                      }}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 3,
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          transform: "translateX(8px)",
                          cursor: "pointer",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: "50%",
                          backgroundColor: info.color,
                          color: "white",
                          mr: 3,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600, mb: 0.5 }}
                        >
                          {info.label}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          {info.value}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                {/* Quick Stats */}
                <Box
                  sx={{
                    mt: 4,
                    pt: 3,
                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ mb: 2, fontWeight: 600 }}
                  >
                    Response Time
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Box sx={{ textAlign: "center" }}>
                        <Typography
                          variant="h4"
                          sx={{ fontWeight: "bold", color: "#08D9D6" }}
                        >
                          {"<24h"}
                        </Typography>
                        <Typography variant="caption" sx={{ opacity: 0.7 }}>
                          Email Response
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ textAlign: "center" }}>
                        <Typography
                          variant="h4"
                          sx={{ fontWeight: "bold", color: "#FF2E63" }}
                        >
                          100%
                        </Typography>
                        <Typography variant="caption" sx={{ opacity: 0.7 }}>
                          Response Rate
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(10px)",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background:
                    "linear-gradient(90deg, #FF2E63, #08D9D6, #FF2E63)",
                },
              }}
            >
              {/* Status Messages */}
              {submitStatus === "success" && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    mb: 3,
                    borderRadius: 2,
                    backgroundColor: "success.light",
                    color: "success.contrastText",
                  }}
                >
                  <CheckCircle sx={{ mr: 2 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Message sent successfully! I'll get back to you soon.
                  </Typography>
                </Box>
              )}

              {submitStatus === "error" && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    mb: 3,
                    borderRadius: 2,
                    backgroundColor: "error.light",
                    color: "error.contrastText",
                  }}
                >
                  <Error sx={{ mr: 2 }} />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Failed to send message. Please try again later.
                  </Typography>
                </Box>
              )}

              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  pt: 1,
                  color: "paletteSecondColour.main",
                }}
              >
                Send me a message
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Your Name"
                      variant="outlined"
                      fullWidth
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      sx={textFieldStyle}
                      disabled={isSubmitting}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email Address"
                      variant="outlined"
                      fullWidth
                      required
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      sx={textFieldStyle}
                      disabled={isSubmitting}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Subject"
                      variant="outlined"
                      fullWidth
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      sx={textFieldStyle}
                      disabled={isSubmitting}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Your Message"
                      variant="outlined"
                      fullWidth
                      required
                      multiline
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      sx={textFieldStyle}
                      disabled={isSubmitting}
                      placeholder="Tell me about your project, ideas, or just say hello! I'm excited to hear from you."
                    />
                  </Grid>
                </Grid>

                {/* Form Footer */}
                <Box sx={{ mt: 4 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        <Chip
                          label="Quick Response"
                          size="small"
                          sx={{
                            backgroundColor: "paletteFirstColour.main",
                            color: "white",
                            fontWeight: 600,
                          }}
                        />
                        <Chip
                          label="Secure"
                          size="small"
                          sx={{
                            backgroundColor: "paletteThirdColour.main",
                            color: "white",
                            fontWeight: 600,
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box
                        display="flex"
                        justifyContent={{ xs: "center", sm: "flex-end" }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          disabled={isSubmitting}
                          startIcon={<Send />}
                          sx={{
                            px: 4,
                            py: 1.5,
                            fontSize: "1.1rem",
                            fontWeight: "bold",
                            borderRadius: 3,
                            textTransform: "none",
                            background:
                              "linear-gradient(45deg, #252A34, #1a1f26)",
                            color: "white",
                            boxShadow: "0 8px 20px rgba(37, 42, 52, 0.3)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              background:
                                "linear-gradient(45deg, #08D9D6, #FF2E63)",
                              transform: "translateY(-2px)",
                              boxShadow: "0 12px 25px rgba(37, 42, 52, 0.4)",
                            },
                            "&:disabled": {
                              background: "rgba(37, 42, 52, 0.5)",
                              color: "rgba(255, 255, 255, 0.7)",
                            },
                          }}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeElement>
  );
});

export default ContactSection;
