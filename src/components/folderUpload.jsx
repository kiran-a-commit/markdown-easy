import '../index.css';
import {Box, Button, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const card = (
    <>
        <CardContent>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                rowSpacing={3}
            >
                <Grid item>
                    <UploadFileIcon className="uploadInfo"/>
                </Grid>
                <Grid item>
                    <Typography className="uploadText" sx={{ fontFamily: 'Monospace' }} gutterBottom>
                        Drag and drop files here
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography className="uploadText" sx={{ fontFamily: 'Monospace' }} gutterBottom>
                        Or
                    </Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained" className="uploadButton" >Browse</Button>
                </Grid>
            </Grid>
        </CardContent>
    </>
);

const FolderUpload = () => {
    return (
        <div className="container">
            <Box>
                <Card variant="outlined">{card}</Card>
            </Box>
        </div>
    );
};

export default FolderUpload;