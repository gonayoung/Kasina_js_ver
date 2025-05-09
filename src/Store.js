import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
name: "user",
initialState: { name: "Nayoung" },
reducers: {
    changeName(state) {
    state.name = "park";
    },

    //state  변경함수를   action이라고 함
    increase(state, action) {
    state.age += action.payload;
    },
},
});

//   increase(10)
//   increase(100)

export let { changeName, increase } = user.actions;

let cart = createSlice({
name: "cart",
initialState: [
    { id: 1, product_img: '/img/5.png', sub_title: 'KASINA X SALOMON XT-4 OG', size: 270, count: 2 },
    { id: 2, product_img: '/img/6.png', sub_title: 'ON Cloudzone 1 M',size: 255,count: 1 },
    { id: 4, product_img: '/img/8.png', sub_title: 'KASINA X POLO RALPH LAUREN TAEGEUK CAPSULE BAYPORT WINDBREAKER', size: 'XL',count: 1 },
],
reducers: {
    addCount(state, action) {
    let num = state.findIndex((a) => {
        return a.id === action.payload;
    });
    console.log(num);
    console.log("내가 선택한 상품" + action.payload);
    console.log("내가 추가한 상품아이디는" + state[num].id);
    console.log("내가 추가한 상품갯수는" + state[num].count);

    state[num].count++;
    },
    decreaseCount(state, action) {
    let num = state.findIndex((a) => {
        return a.id === action.payload;
    });
    console.log(num);
    if (state[num].count > 0) {
        state[num].count--;
    } else if (state[num].count === 0) {
        alert("상품이 더 이상 없습니다.");
    }
    },
    addItem(state, action) {
        // id와 size가 모두 같은 항목을 찾아야 함
        let num = state.findIndex(
          (a) => a.id === action.payload.id && a.size === action.payload.size
        );
      
        if (num !== -1) {
          state[num].count++;
        } else {
          state.push(action.payload);
        }
      },

    deleteItem(state, action) {
    let num = state.findIndex((a) => {
        return a.id === action.payload;
    });
    state.splice(num, 1);
    },
    sortName(state, action) {
      state.sort((a, b) => (a.sub_title > b.sub_title ? 1 : -1));
    },
},
});

// addCount(1)

export let { addCount, decreaseCount, addItem, deleteItem, sortName } = cart.actions;

export default configureStore({
reducer: {
    user: user.reducer,
    cart: cart.reducer,
},
});



