// src/components/atoms/ProjectCard.tsx
import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
  Typography,
  Chip,
  Tab,
  Tabs,
  Grid,
  Divider,
  Avatar,
  LinearProgress,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { 
  GitHub, 
  Language, 
  Description, 
  CalendarToday,
  Code,
  People,
  Timeline,
  TrendingUp,
  Close,
  OpenInNew,
  Star,
  Visibility,
  PlayArrow,
  ChevronLeft,
  ChevronRight
} from "@mui/icons-material";
import ThemeElement from "./ThemeElement";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDisableScroll } from "../../store/feature/scrollSlice";

// Enhanced project interface matching your existing data structure
export interface IEnhancedProject {
  name: string;
  description: string;
  details?: string;
  logo: string;
  github: string;
  website: string;
  images?: string[];
  githubButton: boolean;
  websiteButton: boolean;
  descriptionButton: boolean;
  status: boolean;
  
  // Enhanced fields
  tagline?: string;
  category?: string;
  projectStatus?: 'completed' | 'in-progress' | 'maintenance';
  startDate?: string;
  endDate?: string;
  duration?: string;
  team?: {
    size: number;
    role: string;
    members?: string[];
  };
  technologies?: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
  features?: string[];
  challenges?: string[];
  achievements?: string[];
  metrics?: {
    users?: string;
    performance?: string;
    uptime?: string;
    github?: {
      stars: number;
      forks: number;
      watchers: number;
    };
  };
  testimonials?: {
    text: string;
    author: string;
    role: string;
  }[];
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`project-tabpanel-${index}`}
      aria-labelledby={`project-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const ProjectCard = (props: IEnhancedProject) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState<IEnhancedProject | null>(null);
  const [activeTab, setActiveTab] = React.useState(0);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handleClick = (destination: string) => {
    window.open(destination, "_blank");
  };

  const handleOpen = (project: IEnhancedProject) => {
    setSelectedProject(project);
    setOpen(true);
    setActiveTab(0);
    setCurrentImageIndex(0);
    dispatch(setDisableScroll(true));
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
    setActiveTab(0);
    dispatch(setDisableScroll(false));
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const nextImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images!.length - 1 : prev - 1
      );
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'completed': return 'success';
      case 'in-progress': return 'primary';
      case 'maintenance': return 'warning';
      default: return 'default';
    }
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  // Responsive card layout - switches between horizontal and vertical based on screen size
  const CardLayout = isMobile ? 
    // Mobile: Vertical layout
    ({ children }: { children: React.ReactNode }) => (
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {children}
      </Box>
    ) :
    // Desktop/Tablet: Horizontal layout
    ({ children }: { children: React.ReactNode }) => (
      <Box sx={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
        {children}
      </Box>
    );

  return (
    <ThemeElement>
      <Card 
      onClick={() => handleOpen(props)}
        sx={{ 
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
            cursor: 'pointer',
          },
          minHeight: {
            xs: 'auto',
            sm: 200,
            md: 220,
          }
        }}
      >
        {/* Content Section */}
        <Box sx={{ 
          display: "flex", 
          flexDirection: "column", 
          flex: 1,
          minWidth: 0,
        }}>
          <CardContent sx={{ 
            flex: "1 0 auto", 
            p: { xs: 2, sm: 2.5, md: 3 },
            pb: { xs: 1, sm: 1.5, md: 2 }
          }}>
            {/* Header with title and category */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start', 
              mb: { xs: 1.5, sm: 2 },
              flexWrap: 'wrap',
              gap: 1
            }}>
              <Typography
                component="div"
                variant={isMobile ? "h6" : "h5"}
                sx={{ 
                  fontWeight: 'bold',
                  color: 'paletteSecondColour.main',
                  lineHeight: 1.2,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  minWidth: 0,
                }}
              >
                {props.name}
              </Typography>  
            </Box>
            
            {/* Tagline - only show on larger screens or if space allows */}
            {props.tagline && !isMobile && (
              <Typography
                variant="subtitle2"
                sx={{ 
                  color: 'paletteThirdColour.main',
                  fontWeight: 'medium',
                  mb: 1.5,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {props.tagline}
              </Typography>
            )}
            
            {/* Description */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: '-webkit-box',
                WebkitLineClamp: { xs: 2, sm: 3, md: 3 },
                WebkitBoxOrient: 'vertical',
                lineHeight: 1.4,
                mb: { xs: 1.5, sm: 2 }
              }}
            >
              {props.description}
            </Typography>

            {/* Metrics preview - hide on very small screens */}
            {props.metrics && !isMobile && (
              <Box sx={{ 
                display: 'flex', 
                gap: 0.75, 
                flexWrap: 'wrap',
                mb: 1
              }}>
                {props.metrics.users && (
                  <Chip 
                    icon={<People sx={{ fontSize: '0.875rem !important' }} />} 
                    label={props.metrics.users} 
                    size="small" 
                    variant="outlined"
                    sx={{ fontSize: '0.75rem', height: 24 }}
                  />
                )}
                {props.metrics.performance && isTablet && (
                  <Chip 
                    icon={<TrendingUp sx={{ fontSize: '0.875rem !important' }} />} 
                    label={props.metrics.performance} 
                    size="small" 
                    variant="outlined"
                    sx={{ fontSize: '0.75rem', height: 24 }}
                  />
                )}
              </Box>
            )}

            {/* Category chip for mobile */}
            {props.category && isMobile && (
              <Box sx={{ mb: 1.5 }}>
                <Chip 
                  label={props.category} 
                  size="small" 
                  color="primary"
                  sx={{ fontSize: '0.75rem' }}
                />
              </Box>
            )}
          </CardContent>
          
          {/*Status and Category Chips*/}
          <Box sx={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "flex-start", 
            px: { xs: 2, sm: 2.5, md: 3 },
            pb: { xs: 2, sm: 2.5, md: 3 },
            flexWrap: 'wrap',
            gap: 1
          }}>
            {props.category && !isMobile && (
                <Chip 
                  label={props.category} 
                  size="small" 
                  color="primary"
                  sx={{ 
                    flexShrink: 0,
                    fontSize: '0.75rem'
                  }}
                />
              )}
            {props.projectStatus && (
              <Chip 
                label={props.projectStatus.replace('-', ' ')} 
                size="small"
                color={getStatusColor(props.projectStatus) as any}
                sx={{ 
                  textTransform: 'capitalize',
                  fontSize: '0.75rem',
                  height: { xs: 24, sm: 28 }
                }}
              />
            )}
          </Box>
        </Box>
        
        {/* Logo Section - Responsive positioning */}
        <Box
          sx={{
            // Mobile: Full width at top, Desktop: Fixed width on right
            width: { xs: '100%', sm: 120, md: 140 },
            height: { xs: 120, sm: '100%', md: '100%' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: { xs: 2, sm: 1.5, md: 2 },
            borderTop: { xs: '1px solid #e9ecef', sm: 'none' },
            borderLeft: { xs: 'none', sm: '1px solid #e9ecef' },
            backgroundColor: { xs: '#f8f9fa', sm: 'transparent' },
            flexShrink: 0,
          }}
        >
          <Box
            sx={{
              width: { xs: 80, sm: '90%', md: '85%' },
              height: { xs: 80, sm: '90%', md: '85%' },
              maxWidth: { xs: 80, sm: 100, md: 120 },
              maxHeight: { xs: 80, sm: 100, md: 120 },
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              border: '1px solid #e9ecef',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <CardMedia
              component="img"
              sx={{
                maxWidth: '90%',
                maxHeight: '90%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
              }}
              src={"/images/" + props.logo}
              alt={props.name}
              onError={(e) => {
                // Fallback if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const container = target.parentElement!;
                container.innerHTML = `
                  <div style="
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    width: 100%; 
                    height: 100%; 
                    background: linear-gradient(135deg, #FF2E63, #08D9D6);
                    color: white;
                    font-weight: bold;
                    font-size: ${isMobile ? '18px' : '20px'};
                    border-radius: 8px;
                  ">
                    ${props.name.charAt(0)}
                  </div>
                `;
              }}
            />
          </Box>
        </Box>
      </Card>

      {/* Enhanced Modal - same as before but with responsive adjustments */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="lg"
        fullScreen={isMobile}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "paletteFourthColour.main",
            minHeight: isMobile ? '100vh' : '80vh',
            maxHeight: isMobile ? '100vh' : '90vh',
            borderRadius: isMobile ? 0 : 3,
            m: isMobile ? 0 : 2,
          },
        }}
      >
        {/* Header Section */}
        <DialogTitle 
          sx={{ 
            background: 'linear-gradient(135deg, #FF2E63 0%, #08D9D6 100%)',
            color: 'white',
            position: 'relative',
            pb: 3,
            px: { xs: 2, sm: 3 }
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: { xs: 8, sm: 16 },
              top: { xs: 8, sm: 16 },
              color: 'white',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
            }}
          >
            <Close />
          </IconButton>
          
          <Typography variant={isMobile ? "h5" : "h4"} component="h2" sx={{ fontWeight: 'bold', mb: 1, pr: 6 }}>
            {selectedProject?.name}
          </Typography>
          
          {selectedProject?.tagline && (
            <Typography variant={isMobile ? "body1" : "h6"} sx={{ opacity: 0.9, mb: 2 }}>
              {selectedProject.tagline}
            </Typography>
          )}
          
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 1, sm: 2 }, 
            alignItems: 'center', 
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {selectedProject?.category && (
                <Chip 
                  label={selectedProject.category} 
                  size={isMobile ? "small" : "medium"}
                  sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}
                />
              )}
              {selectedProject?.projectStatus && (
                <Chip 
                  label={selectedProject.projectStatus.replace('-', ' ')} 
                  size={isMobile ? "small" : "medium"}
                  sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', textTransform: 'capitalize' }}
                />
              )}
              {selectedProject?.duration && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'white' }}>
                  <CalendarToday sx={{ fontSize: { xs: 14, sm: 16 } }} />
                  <Typography variant={isMobile ? "caption" : "body2"}>{selectedProject.duration}</Typography>
                </Box>
              )}
            </Box>
            
            {/* Action buttons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {selectedProject?.github && (
                <IconButton
                  onClick={() => handleClick(selectedProject.github)}
                  size={isMobile ? "small" : "medium"}
                  sx={{ color: 'white', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
                >
                  <GitHub fontSize={isMobile ? "small" : "medium"} />
                </IconButton>
              )}
              {selectedProject?.website && (
                <IconButton
                  onClick={() => handleClick(selectedProject.website)}
                  size={isMobile ? "small" : "medium"}
                  sx={{ color: 'white', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
                >
                  <OpenInNew fontSize={isMobile ? "small" : "medium"} />
                </IconButton>
              )}
            </Box>
          </Box>
        </DialogTitle>

        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: '#f8f9fa' }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange} 
            variant={isMobile ? "scrollable" : "fullWidth"}
            scrollButtons={isMobile ? "auto" : false}
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 'medium',
                fontSize: { xs: '0.875rem', sm: '1rem' },
                minWidth: { xs: 80, sm: 120 }
              }
            }}
          >
            <Tab icon={<Description fontSize={isMobile ? "small" : "medium"} />} label="Overview" />
            <Tab icon={<Code fontSize={isMobile ? "small" : "medium"} />} label="Technical" />
            {selectedProject?.images && selectedProject.images.length > 0 && (
              <Tab icon={<Star fontSize={isMobile ? "small" : "medium"} />} label="Gallery" />
            )}
            <Tab icon={<TrendingUp fontSize={isMobile ? "small" : "medium"} />} label="Impact" />
          </Tabs>
        </Box>

        {/* Content */}
        <DialogContent sx={{ 
          p: 0, 
          height: isMobile ? 'calc(100vh - 200px)' : '60vh', 
          overflow: 'auto' 
        }}>
          {/* Overview Tab */}
          <TabPanel value={activeTab} index={0}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom sx={{ color: 'paletteSecondColour.main', fontWeight: 'bold' }}>
                  Project Description
                </Typography>
                <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                  {selectedProject?.details || selectedProject?.description}
                </Typography>
              </Grid>

              {selectedProject?.features && (
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom sx={{ color: 'paletteSecondColour.main', fontWeight: 'bold' }}>
                    Key Features
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {selectedProject.features.map((feature, index) => (
                      <Typography component="li" key={index} sx={{ mb: 1 }}>
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </Grid>
              )}

              {selectedProject?.achievements && (
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom sx={{ color: 'paletteSecondColour.main', fontWeight: 'bold' }}>
                    Achievements
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {selectedProject.achievements.map((achievement, index) => (
                      <Typography component="li" key={index} sx={{ mb: 1, color: 'success.main' }}>
                        {achievement}
                      </Typography>
                    ))}
                  </Box>
                </Grid>
              )}

              {/* Team & Timeline Info */}
              {(selectedProject?.team || selectedProject?.startDate) && (
                <Grid item xs={12}>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="h6" gutterBottom sx={{ color: 'paletteSecondColour.main', fontWeight: 'bold' }}>
                    Project Details
                  </Typography>
                  <Grid container spacing={2}>
                    {selectedProject?.team && (
                      <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#f8f9fa', borderRadius: 2 }}>
                          <People sx={{ fontSize: 40, color: 'paletteThirdColour.main', mb: 1 }} />
                          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'paletteSecondColour.main' }}>
                            {selectedProject.team.size}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            Team Members
                          </Typography>
                          <Typography variant="caption" display="block">
                            {selectedProject.team.role}
                          </Typography>
                        </Box>
                      </Grid>
                    )}
                    
                    {selectedProject?.duration && (
                      <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#f8f9fa', borderRadius: 2 }}>
                          <Timeline sx={{ fontSize: 40, color: 'paletteFirstColour.main', mb: 1 }} />
                          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'paletteSecondColour.main' }}>
                            {selectedProject.duration}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            Duration
                          </Typography>
                          {selectedProject.startDate && (
                            <Typography variant="caption" display="block">
                              {formatDate(selectedProject.startDate)} - {selectedProject.endDate ? formatDate(selectedProject.endDate) : 'Present'}
                            </Typography>
                          )}
                        </Box>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              )}
            </Grid>
          </TabPanel>

          {/* Technical Tab */}
          <TabPanel value={activeTab} index={1}>
            <Grid container spacing={3}>
              {selectedProject?.technologies && (
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom sx={{ color: 'paletteSecondColour.main', fontWeight: 'bold' }}>
                    Technology Stack
                  </Typography>
                  <Grid container spacing={2}>
                    {Object.entries(selectedProject.technologies).map(([category, techs]) => (
                      techs.length > 0 && (
                        <Grid item xs={12} sm={6} key={category}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'medium', mb: 1, textTransform: 'capitalize' }}>
                            {category}
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {techs.map((tech, index) => (
                              <Chip
                                key={index}
                                label={tech}
                                size="small"
                                sx={{ 
                                  backgroundColor: 'paletteFirstColour.main',
                                  color: 'white',
                                  '&:hover': { backgroundColor: 'paletteThirdColour.main' }
                                }}
                              />
                            ))}
                          </Box>
                        </Grid>
                      )
                    ))}
                  </Grid>
                </Grid>
              )}

              {selectedProject?.challenges && (
                <Grid item xs={12}>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="h6" gutterBottom sx={{ color: 'paletteSecondColour.main', fontWeight: 'bold' }}>
                    Technical Challenges
                  </Typography>
                  {selectedProject.challenges.map((challenge, index) => (
                    <Box 
                      key={index} 
                      sx={{ 
                        p: 2, 
                        mb: 2, 
                        backgroundColor: '#fff3cd', 
                        borderLeft: 4, 
                        borderColor: 'warning.main',
                        borderRadius: 1
                      }}
                    >
                      <Typography>{challenge}</Typography>
                    </Box>
                  ))}
                </Grid>
              )}
            </Grid>
          </TabPanel>

          {/* Gallery Tab */}
          {selectedProject?.images && selectedProject.images.length > 0 && (
            <TabPanel value={activeTab} index={2}>
              <Box sx={{ position: 'relative' }}>
                {/* Main Image */}
                <Box sx={{ 
                  position: 'relative', 
                  backgroundColor: '#f5f5f5', 
                  borderRadius: 2, 
                  overflow: 'hidden',
                  aspectRatio: { xs: '4/3', sm: '16/9' },
                  mb: 3
                }}>
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`Project screenshot ${currentImageIndex + 1}`}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain'
                    }}
                  />
                  
                  {selectedProject.images.length > 1 && (
                    <>
                      <IconButton
                        onClick={prevImage}
                        sx={{
                          position: 'absolute',
                          left: { xs: 8, sm: 16 },
                          top: '50%',
                          transform: 'translateY(-50%)',
                          backgroundColor: 'rgba(0,0,0,0.5)',
                          color: 'white',
                          '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' }
                        }}
                      >
                        <ChevronLeft />
                      </IconButton>
                      <IconButton
                        onClick={nextImage}
                        sx={{
                          position: 'absolute',
                          right: { xs: 8, sm: 16 },
                          top: '50%',
                          transform: 'translateY(-50%)',
                          backgroundColor: 'rgba(0,0,0,0.5)',
                          color: 'white',
                          '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' }
                        }}
                      >
                        <ChevronRight />
                      </IconButton>
                    </>
                  )}
                </Box>

                {/* Thumbnail Navigation */}
                <Grid container spacing={1}>
                  {selectedProject.images.map((image, index) => (
                    <Grid item xs={3} sm={2} key={index}>
                      <Box
                        onClick={() => setCurrentImageIndex(index)}
                        sx={{
                          cursor: 'pointer',
                          border: 2,
                          borderColor: index === currentImageIndex ? 'paletteThirdColour.main' : 'transparent',
                          borderRadius: 1,
                          overflow: 'hidden',
                          aspectRatio: '16/9',
                          '&:hover': { borderColor: 'paletteFirstColour.main' }
                        }}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover' 
                          }}
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </TabPanel>
          )}

          {/* Impact Tab */}
          <TabPanel value={activeTab} index={selectedProject?.images?.length ? 3 : 2}>
            <Grid container spacing={3}>
              {selectedProject?.metrics && (
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom sx={{ color: 'paletteSecondColour.main', fontWeight: 'bold' }}>
                    Project Metrics & Impact
                  </Typography>
                  <Grid container spacing={2}>
                    {selectedProject.metrics.users && (
                      <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ 
                          textAlign: 'center', 
                          p: 3, 
                          background: 'linear-gradient(135deg, #FF2E63 0%, #FF6B6B 100%)',
                          color: 'white',
                          borderRadius: 2
                        }}>
                          <People sx={{ fontSize: { xs: 30, sm: 40 }, mb: 1 }} />
                          <Typography variant={isMobile ? "h6" : "h5"} sx={{ fontWeight: 'bold' }}>
                            {selectedProject.metrics.users}
                          </Typography>
                          <Typography variant="body2">Active Users</Typography>
                        </Box>
                      </Grid>
                    )}
                    
                    {selectedProject.metrics.performance && (
                      <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ 
                          textAlign: 'center', 
                          p: 3, 
                          background: 'linear-gradient(135deg, #08D9D6 0%, #52C7B8 100%)',
                          color: 'white',
                          borderRadius: 2
                        }}>
                          <TrendingUp sx={{ fontSize: { xs: 30, sm: 40 }, mb: 1 }} />
                          <Typography variant={isMobile ? "h6" : "h5"} sx={{ fontWeight: 'bold' }}>
                            {selectedProject.metrics.performance}
                          </Typography>
                          <Typography variant="body2">Performance</Typography>
                        </Box>
                      </Grid>
                    )}
                    
                    {selectedProject.metrics.uptime && (
                      <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ 
                          textAlign: 'center', 
                          p: 3, 
                          background: 'linear-gradient(135deg, #4CAF50 0%, #81C784 100%)',
                          color: 'white',
                          borderRadius: 2
                        }}>
                          <Timeline sx={{ fontSize: { xs: 30, sm: 40 }, mb: 1 }} />
                          <Typography variant={isMobile ? "h6" : "h5"} sx={{ fontWeight: 'bold' }}>
                            {selectedProject.metrics.uptime}
                          </Typography>
                          <Typography variant="body2">Uptime</Typography>
                        </Box>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              )}

              {selectedProject?.testimonials && (
                <Grid item xs={12}>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="h6" gutterBottom sx={{ color: 'paletteSecondColour.main', fontWeight: 'bold' }}>
                    Testimonials
                  </Typography>
                  {selectedProject.testimonials.map((testimonial, index) => (
                    <Box 
                      key={index}
                      sx={{ 
                        p: 3, 
                        mb: 2, 
                        backgroundColor: '#f8f9fa', 
                        borderLeft: 4, 
                        borderColor: 'paletteFirstColour.main',
                        borderRadius: 1
                      }}
                    >
                      <Typography sx={{ fontStyle: 'italic', mb: 2, fontSize: '1.1rem' }}>
                        "{testimonial.text}"
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: 'paletteThirdColour.main' }}>
                          {testimonial.author.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            {testimonial.author}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {testimonial.role}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Grid>
              )}
            </Grid>
          </TabPanel>
        </DialogContent>
      </Dialog>
    </ThemeElement>
  );
};

export default ProjectCard;