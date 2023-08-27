// Core
import { useContext, useEffect, useState } from "react";
import axios from "axios";
// Components
import {
  Grid,
  TextField,
  CardContent,
  Button,
  Divider,
  Box,
  Typography,
  Pagination,
  List,
  FormControlLabel,
  Checkbox
} from "@mui/material";
// Contexts
import GlobalContext from "../../../contexts/Global/Context";
import StoreContext from "../../../contexts/Store/Context";
// Styling
import BasicCard from "../../styles/BasicCard";
import TextRestrain from "../../styles/TextRestrain";


const TabProducts = () => {
  const [global, globalActions] = useContext(GlobalContext)
  const [store, storeActions] = useContext(StoreContext)

  const [maxLimit, setMaxLimit] = useState(5)
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileLimit, setFileLimit] = useState(false);

  // pagination
  const [showItems, setShowItems] = useState([])
  const [pageCount, setPageCount] = useState(1)
  const [page, setPage] = useState(1)

  useEffect(() => {
    try {
      setShowItems(store.products.slice((page * 4) - 4, page * 4))
      setPageCount(Math.ceil(store.products.length / 4))
    } catch (err) {null}
  }, [store.products, page])
  // pagination

  const emptyForm = {
    name: "",
    description: "",
    price: "",
    category: "",
    stock: ""
  }
  const [formData, setFormData] = useState(emptyForm)
  const [disableAdd, setDisableAdd] = useState(false)
  const [disableDelete, setDisableDelete] = useState(false)
  const [delPics, setDelPics] = useState([])
  const [listPics, setListPics] = useState([])

  useEffect(() => {
    if(formData.id) {
      null
    }
  }, [formData.id])

  useEffect(() => {
    if(!uploadedFiles.length) setFileLimit(false)
  }, [uploadedFiles])

  function formHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function checkboxHandler(e) {
    if (e.target.checked) {
      setDelPics([...delPics, e.target.name])
    } else {
      setDelPics(delPics.filter((pic) => pic !== e.target.name))
    }
  }

  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === maxLimit) setFileLimit(true);
        if (uploaded.length > maxLimit) {
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

  async function addItem() {
    const form = new FormData()
    form.append("name", formData.name)
    form.append("description", formData.description)
    form.append("price", formData.price)
    form.append("category", formData.category)
    form.append("stock", formData.stock)

    if (uploadedFiles.length) {
      for (const file of uploadedFiles) {
        form.append("images", file)
      }
    } else {
      return
    }

    setDisableAdd(true)
    try {
      const res = await axios.post(global.api("/products"), form, {withCredentials:true})
      storeActions.setProducts([...store.products, res.data.product])
      setFormData(emptyForm)
      setUploadedFiles([])
    } catch (err) {
      console.log(err)
    }
    setDisableAdd(false)
  }

  async function updateItem() {
    const form = new FormData()
    form.append("name", formData.name)
    form.append("description", formData.description)
    form.append("price", formData.price)
    form.append("category", formData.category)
    form.append("stock", formData.stock)

    if (uploadedFiles.length) {
      for (const file of uploadedFiles) {
        form.append("images", file)
      }
    }

    if (delPics.length) {
      for (const image of delPics) {
        form.append("deleteImages", image)
      }
    }

    setDisableAdd(true)
    try {
      const res = await axios.put(global.api("/products/") + formData.id, form, {withCredentials:true})
      storeActions.setProducts(
        store.products.map((item) => {
          if (item._id === formData.id) {
            return res.data.product;
          }
          return item;
        })
      );

      setFormData(emptyForm)
      setDelPics([])
      setListPics([])
      setUploadedFiles([])
    } catch (err) {
      console.log(err)
    }
    setDisableAdd(false)

  }
  async function requestHandler() {
    if (formData.id) {
      await updateItem();
    } else {
      await addItem();
    }
  }

  async function deleteHandler(id) {
    setDisableDelete(true)
    try {
      await axios.delete(global.api("/products/") + id, {withCredentials:true})
      storeActions.setProducts(store.products.filter((item) => item._id !== id))
    } catch (err) {
      console.log(err)
    }
    setDisableDelete(false)
  }

  function updateHandler(item) {
    setFormData({
      id: item._id,
      name: item.name,
      description: item.description,
      price: item.price,
      category: item.category,
      stock: item.stock,
    })
    const images = []
    for (const image of item.images) {
      images.push(image.public_id)
    }
    setMaxLimit(5 - images.length)
    setListPics(images)
  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField name="name" onChange={formHandler} value={formData.name} fullWidth label="Name" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="description" onChange={formHandler} value={formData.description} fullWidth label="Description" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="price" onChange={formHandler} value={formData.price} fullWidth type="number" label="Price" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="category" onChange={formHandler} value={formData.category} fullWidth label="Category" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="stock" onChange={formHandler} value={formData.stock} fullWidth type="number" label="Stock" />
          </Grid>
          <Grid display={formData.id ? "block" : "none"} item xs={12} sm={6}>
            <Typography variant="h6">Delete Pictures</Typography>
            <List>
              {listPics.map((pic) => {
                return (
                  <FormControlLabel key={pic} label={pic} control={<Checkbox onClick={checkboxHandler} name={pic} />} />
                )
              })}
            </List>
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
                  variant="contained"
                  component="label"
                  htmlFor="fileUpload"
                  sx={{
                    background: "#9676F4",
                    margin: "10px 0px",
                    "&:hover": {
                      background: "#9676F4"
                    }
                  }}
                  disabled={fileLimit}
                >
                  Upload Pictures
                </Button>
                <Button onClick={() => {setUploadedFiles([]); setFileLimit(false)}} sx={{marginLeft: "10px"}} type="reset" variant="outlined" color="secondary">
                  Reset
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
              sx={{
                background: "#9676F4",
                marginRight: "20px",
                "&:hover": {
                  background: "#9676F4"
                }
              }}
              onClick={requestHandler}
              disabled={disableAdd}
            >
              {formData.id ? "Update Product" : "Add Product"}
            </Button>
            <Button onClick={() => {setFormData(emptyForm); setDelPics([]); setListPics([]); setUploadedFiles([])}} type="reset" variant="outlined" color="secondary">
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
      <Divider style={{ margin: "20px" }} />
      <Grid container spacing={3}>
        {showItems.map((item) => {
          return (
            <Grid key={item._id} item sm={12} md={6} >
              <BasicCard>
                <Box display="flex">
                  <img
                    src={item.images[0].url}
                    alt="Product Pic"
                    style={{ width: "100px", height: "100px", borderRadius: "15px", marginRight: "10px"}}
                  />
                  <TextRestrain variant="body2">
                    Name: {item.name}
                    <br />
                    Description: {item.description}
                    <br />
                    Price: {item.price}$
                    <br />
                    Category: {item.category}
                    <br />
                    Stock: {item.stock}
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
                    onClick={() => updateHandler(item)}
                  >
                    Update
                  </Button>
                  <Button disabled={disableDelete || formData.id === item._id} onClick={() => deleteHandler(item._id)} type="reset" variant="outlined" color="secondary">
                    Delete
                  </Button>
                </Box>
              </BasicCard>
            </Grid>
          )      
        })}

      </Grid>
      <Divider style={{margin: "20px"}} />
      <Box display="flex" justifyContent="center">
        <Pagination page={page} onChange={(e, v) => setPage(v)} count={pageCount} />
      </Box>
  </CardContent>
  );
};

export default TabProducts;
