import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next) => {
        try {
                const token = req.headers;
                if(!token){
                        return res.json({ success: false, message: 'Token not found' });
                }
                const token_decode = token.verify(process.env.JWT_SECRET);
                if(token_decode !== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
                        return res.json({ success: false, message: 'Invalid token' });
                }
                next()
                
        } catch (error) {
                console.log(error);
                res.json({ success: false, message: error.message });
        }

}

export default adminAuth;