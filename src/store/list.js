const state = {
  img: ''
}

const mutations = {
  SET_IMG(state, value) {
    state.img = value
  }
}

const actions = {
  changeListImg({ commit }, TextList) {
    const EvtTarget = event.currentTarget;
    const bgColor = document.querySelectorAll(".row .col");
    const EvtChild = event.currentTarget.childNodes;
    bgColor.forEach(function (item) {
      if (item.classList.contains("border-2")) {
        item.classList.remove("border-2");
        item.children[0].classList.remove("bg-green");
      }
    });
    EvtTarget.classList.add("border-2");
    EvtChild[0].classList.add("bg-green");
    commit('SET_IMG', TextList)
  }
}

export default {
  state,
  mutations,
  actions
}