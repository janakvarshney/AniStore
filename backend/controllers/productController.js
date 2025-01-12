import { v2 as cloudinary } from 'cloudinary';
import Product from '../models/productModel.js';

//function to add product
const addProduct = async (req, res) => {
        try {
                const { name, price, description, category, subCategory, sizes, bestseller } = req.body;

                const image1 = req.files.image1 && req.files.image1[0].path;
                const image2 = req.files.image2 && req.files.image2[0].path;
                const image3 = req.files.image3 && req.files.image3[0].path;
                const image4 = req.files.image4 && req.files.image4[0].path;

                const images = [image1, image2, image3, image4];

                let imagesUrl = await Promise.all(
                        images.map(async (item) => {
                                let result = await cloudinary.uploader.upload(item.path,{
                                        resource_type: 'image',
                                });
                                return result.secure_url;
                        })
                );

                const productData = {
                        name,
                        price:Number(price),
                        description,
                        category,
                        subCategory,
                        sizes: JSON.parse(sizes),
                        bestseller: bestseller === true ? true : false,
                        images: imagesUrl,
                        time: Date.now(),
                };

                console.log(productData);
                const product = new Product(productData);
                await product.save();

                req.JSON({success: true, message: 'Product added successfully'});
        } catch (error) {
                console.log(error);
                res.JSON({ success: false, message: error.message });
        }
}
//function to list all products 
const listProducts = async (req, res) => {

}

//function to remove products 
const removeProducts = async (req, res) => {

}

//function to single product info 
const singleProductInfo = async (req, res) => {

}

export { addProduct, listProducts, removeProducts, singleProductInfo };

