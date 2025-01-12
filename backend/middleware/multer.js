import multer from 'multer';

const storage =  multer.diskStorage({
        file:function(req,file,callBack){
                callBack(null,file.originalname);
        }
});

const upload = multer({storage});

export default upload;
