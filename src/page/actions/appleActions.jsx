//这是名空间，对普通action做划分
const prefix = 'apple/';

let actions = {

    //注意这里需要 () => ... , 不然 pickAppleAction 不是一个actionCreator, 而是一个thunk
    pickApple: { type: 'increase' }
    

};

export default actions;