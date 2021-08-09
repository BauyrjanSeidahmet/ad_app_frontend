import React, {useState} from "react";
import {Grid, TextField, Button} from "@material-ui/core";
import FileInput from '../UI/FileInput/FileInput';
import axios from '../../axiosApi'

const ProductForm = props => {
  const [state, setState] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: ""
  });

  const inputChangeHandler = e => {
    const {name, value} = e.target;
    setState(prevState => {
      return {...prevState, [name]: value};
    });
  };

  const fileChangeHandler = e => {
    const file = e.target.files[0];
    setState(prevState => {
      return {
        ...prevState,
        image: file 
      };
    });
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(state).forEach(key => {
      formData.append(key, state[key]);
    });
    props.onSubmit(formData);
  };


  const onChangeSelect = async (sel) => {
    const value = sel.target.value

    const response = await axios.get('/categories')
    const categories = response.data

    if (categories.length) {
      const chosenCat = categories.filter(cat => cat.title === value)
      const catId = chosenCat[0]._id
    
    setState(prevState => {
        return {...prevState, category: catId}
    })
    }
}

  return (
    <form onSubmit={formSubmitHandler}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Title"
            name="title"
            onChange={inputChangeHandler}
            value={state.title}
          />
        </Grid>
        <Grid item>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Price"
            name="price"
            onChange={inputChangeHandler}
            value={state.price}
          />
        </Grid>
        <Grid item>
          <TextField
            required
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            label="Description"
            name="description"
            onChange={inputChangeHandler}
            value={state.description}
          />
        </Grid>
        <Grid item>
          <FileInput
            label="Image"
            name="image"
            onChange={fileChangeHandler}
          />
        </Grid>
        <Grid item>
                    <p>Category</p> 
                    <select onChange={onChangeSelect} className='select' required>
                        <option>Select Category</option>
                        <option value='computers'>Computers</option>
                        <option value='cars'>Cars</option>
                        <option value='others'>Others</option>
                    </select>
        </Grid>
        <Grid item>
          <Button type="submit" color="primary">
            Create item
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProductForm;