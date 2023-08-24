// Core
import { useState } from "react";
// Components
import {
  Grid,
  TextField,
  CardContent,
  Button,
  Divider,
  Box,
  Typography,
  Pagination
} from "@mui/material";
// Styling
import BasicCard from "../../styles/BasicCard";
import TextRestrain from "../../styles/TextRestrain";
// Assets
import ProductImg from "../../../assets/Product/earbuds.jpeg"

const MAX_COUNT = 5;

const TabProducts = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileLimit, setFileLimit] = useState(false);

  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
          alert(`You can only add a maximum of ${MAX_COUNT} files`);
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    });
    if (!limitExceeded) setUploadedFiles(uploaded);
  };

  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };

  return (
    <CardContent>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Name" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Description" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type="number" label="Price" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Category" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type="number" label="Stock" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container >
              <Grid item >
                <input
                  id="fileUpload"
                  type="file"
                  multiple
                  hidden
                  accept="image/jpeg, image/png"
                  onChange={handleFileEvent}
                  disabled={fileLimit}
                />

                <Button
                  component="label"
                  htmlFor="fileUpload"
                  style={{
                    background: "#9676F4",
                    margin: "10px 0px",
                    color: "white",
                  }}
                >
                  {fileLimit ? <s>Upload Files</s> : "Upload Files"}
                </Button>
    
              </Grid>

              <Grid item style={{padding: "10px"}}>
                {uploadedFiles.map((file) => (
                  <Typography display="block" variant="caption" key={file.name}>&bull; {file.name}</Typography>
                ))}
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              style={{ background: "#9676F4", marginRight: "20px" }}
            >
              Add Address
            </Button>
            <Button type="reset" variant="outlined" color="secondary">
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
      <Divider style={{ margin: "20px" }} />
      <Grid container spacing={3}>
        {/* Item Example */}
        <Grid item sm={12} md={6} >
          <BasicCard>
            <Box display="flex">
              <img
                src={ProductImg}
                alt="Product Pic"
                style={{ width: "100px", height: "100px", borderRadius: "15px", marginRight: "10px"}}
              />
              <TextRestrain variant="body2">
                Name: Dell Latitude
                <br />
                Description: abc
                <br />
                Price: 80$
                <br />
                Category: laptop
                <br />
                Stock: 40
                <br />
              </TextRestrain>
            </Box>
            <Divider style={{ margin: "10px 0px" }} />
            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                style={{ background: "#9676F4", marginRight: "10px" }}
              >
                View
              </Button>
              <Button
                variant="contained"
                style={{ background: "#9676F4", marginRight: "10px" }}
              >
                Update
              </Button>
              <Button type="reset" variant="outlined" color="secondary">
                Delete
              </Button>
            </Box>
          </BasicCard>
        </Grid>
        <Grid item sm={12} md={6} >
          <BasicCard>
            <Box display="flex">
              <img
                src={ProductImg}
                alt="Product Pic"
                style={{ width: "100px", height: "100px", borderRadius: "15px", marginRight: "10px"}}
              />
              <TextRestrain variant="body2">
                Name: Dell Latitude
                <br />
                Description: abc
                <br />
                Price: 80$
                <br />
                Category: laptop
                <br />
                Stock: 40
                <br />
              </TextRestrain>
            </Box>
            <Divider style={{ margin: "10px 0px" }} />
            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                style={{ background: "#9676F4", marginRight: "10px" }}
              >
                View
              </Button>
              <Button
                variant="contained"
                style={{ background: "#9676F4", marginRight: "10px" }}
              >
                Update
              </Button>
              <Button type="reset" variant="outlined" color="secondary">
                Delete
              </Button>
            </Box>
          </BasicCard>
        </Grid>
        <Grid item sm={12} md={6} >
          <BasicCard>
            <Box display="flex">
              <img
                src={ProductImg}
                alt="Product Pic"
                style={{ width: "100px", height: "100px", borderRadius: "15px", marginRight: "10px"}}
              />
              <TextRestrain variant="body2">
                Name: Dell Latitude
                <br />
                Description: abc
                <br />
                Price: 80$
                <br />
                Category: laptop
                <br />
                Stock: 40
                <br />
              </TextRestrain>
            </Box>
            <Divider style={{ margin: "10px 0px" }} />
            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                style={{ background: "#9676F4", marginRight: "10px" }}
              >
                View
              </Button>
              <Button
                variant="contained"
                style={{ background: "#9676F4", marginRight: "10px" }}
              >
                Update
              </Button>
              <Button type="reset" variant="outlined" color="secondary">
                Delete
              </Button>
            </Box>
          </BasicCard>
        </Grid>
        <Grid item sm={12} md={6} >
          <BasicCard>
            <Box display="flex">
              <img
                src={ProductImg}
                alt="Product Pic"
                style={{ width: "100px", height: "100px", borderRadius: "15px", marginRight: "10px"}}
              />
              <TextRestrain variant="body2">
                Name: Dell Latitude
                <br />
                Description: abc
                <br />
                Price: 80$
                <br />
                Category: laptop
                <br />
                Stock: 40
                <br />
              </TextRestrain>
            </Box>
            <Divider style={{ margin: "10px 0px" }} />
            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                style={{ background: "#9676F4", marginRight: "10px" }}
              >
                View
              </Button>
              <Button
                variant="contained"
                style={{ background: "#9676F4", marginRight: "10px" }}
              >
                Update
              </Button>
              <Button type="reset" variant="outlined" color="secondary">
                Delete
              </Button>
            </Box>
          </BasicCard>
        </Grid>


      </Grid>
      <Divider style={{margin: "20px"}} />
      <Box item display="flex" justifyContent="center">
        <Pagination count={10} />
      </Box>
  </CardContent>
  );
};

export default TabProducts;
