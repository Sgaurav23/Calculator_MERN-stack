

// const mongoose = 'mongoose'
// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//         lowerCase: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         lowerCase: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// }, {timestamp:true}
// )
// export const User = mongoose.model("User", userSchema)






// const mongoose = requred('mongoose')
// const todoSchema = new mongoose.Schema({
//     content: {
//         type: String,
//         required: true,
//     },
//     complete: {
//         type: Boolean,
//         default: false,
//     },
//     createBy: {
//         type: mongoose.Schema.Type.ObjectId,
//         ref: "User"
//     },
//     subTodo: [
//         {
//             type: mongoose.Schema.Type.ObjectId,
//             ref: "SubTodo",0
//         }
//     ]
// }, {timestamp: true})
// export const Todo = mongoose.model("Todo", todoSchema)




// const mongoose = require('mongoose')
// const subTodoSchema = new mongoose.Schema({
//     content: {
//         type: String,
//         required: true,
//     },
//     complete: {
//         type: Boolean,
//         default: false,
//     },
//     createBy: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//     }
// }, {timestamp: true})




// const mongoose = required('mongoose')
// new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//         lowerCase: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         lowerCase: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     }
// }, {timestamps: true})
// export const User = mongoose.model("User", userSchema)




// const mongoose = required('mongoose')
// const categorySchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
// }, {timestamps: true})
// export const Category = mongoose.model("Category", categorySchema)


// const mongoose = required('mongoose')
// const productSchema = new mongoose.Schema({
//     description: {
//         reduired: true,
//         type: String,
//     },
//     name: {
//         required: true,
//         type: String,
//     },
//     productImage: {
//       type: String,  
//     },
//     price: {
//         type: Number,
//         default: 0,
//     },
//     stock: {
//         type: Number,
//         default: 0,
//     },
//     category: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Category",
//         required: true,
//     },
//     owner: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//     },
// }, {timestamps: true})
// export const Product = mongoose.model("Product", productSchema)




// const mongoose = required('mongoose')
// const orderItemSchema = new mongoose.Schema({
//     product: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Product"
//     },
//     quantity: {
//         type: Number,
//         required: true,
//     }
// })
// const orderSchema = new mongoose.Schema({
//     orderPrice: {
//         type: Number,
//         required: true,
//     },
//     customer: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//     },
//     orderItem: {
//         type: [orderItemSchema],
//     },
//     address: {
//         type: String,
//         required: true,
//     },
//     status: {
//         type: String,
//         enum: ["PENDING", "CANCELLED", "DELIVERED"],
//         default: "PENDING",
//     }
// }, {timestamps: true})
// export const Order = mongoose.model("Order", orderSchema)





// import { lowerCase, uniqueId } from "lodash";
// import { Schema } from "mongoose";
// import mongoose from "mongoose";
// const userSchema = new Schema({
//     username: {
//         type: String,
//         index: true,
//         required: true,
//         unique: true,
//         lowerCase: true, 
//         trim: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         lowerCase: true, 
//         trim: true,
//     },
//     fullname: {
//         type: String,
//         required: true,
//         index: true,
//         trim: true,
//     },
//     watchhistory: {
//         type: Schema.Types.ObjectId,
//         ref: "video",
//     },
//     password: {
//         type: String,
//         required: true,
//         unique: true,
//     },
    
// }, {timestamps: true})
// export const User = mongoose.model("User", userSchema)





// import mongoose, {Schema} from "mongoose"
// const videoSchema = new Schema({
//     videofile: {
//         type: String,   //url
//         required: true,
//     },
//     thumbnail: {
//         type: String,   //url
//         required: true,
//     },
//     title: {
//         type: String,   
//         required: true,
//     },
//     description: {
//         type: String,   
//         required: true,
//     },
//     duration: {
//         type: Number,
//         required: true,
//     },
//     views: {
//         type: Number,
//         default: 0,
//     },
//     ispublished: {
//         type: Boolean,
//         default: true
//     },
//     owner: {
//         type: Schema.Types.ObjectId,
//         ref: "Uer"
//     }
// }, {timestamps: true})
// export const Video = mongoose.model("Video", videoSchema)




// const mongoose = require('mongoose')
// const ProductSchema = mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: [true, "enter name"]
//         },
//         quantity: {
//             type: Number,
//             required: String,
//             default: 0
//         },
//         price: {
//             type: Number,
//             required: false,
//             default: 0
//         },
//         image: {
//             type: String,
//             required: false
//         }
//     },
//     {
//         Timestamp: true,
//     }
// )

// const Product = mongoose.model("Product", ProductSchema)
// module.exports = Product;










const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    expression: {
        type: String,
        required: true
    },
    result: {
        type: String,
        required: true
    },
    queryType: {
        type: String,
        enum: ['text', 'voice'],
        default: 'text'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const History = mongoose.model('History', historySchema);
module.exports = History;









// const mongoose = require('mongoose');

// const historySchema = new mongoose.Schema({
//     expression: {
//         type: String,
//         required: true
//     },
//     result: {
//         type: String,
//         required: true
//     }
// }, {
//     timestamps: true
// });

// const History = mongoose.model('History', historySchema);
// module.exports = History;











// const mongoose = require('mongoose');

// const TaskSchema = new mongoose.Schema({
//   title: { type: String},
//   description: String,
//   completed: { type: Boolean, default: false}
// },{
//   timestamps: true
// });
// const Task = mongoose.model('Task', TaskSchema);
// module.exports = Task






// const mongoose = require('mongoose');

// const colorSchema = new mongoose.Schema({
//   expression: String
// }, { timestamps: true });

// const Color = mongoose.model('Color', colorSchema);

// module.exports = Color;







// // schema.js
// const mongoose = require('mongoose');

// const chatSchema = new mongoose.Schema({
//     message: {
//         type: String,
//         required: true
//     },
//     timestamp: {
//         type: Date,
//         default: Date.now
//     }
// });

// module.exports = mongoose.model('Chat', chatSchema);
