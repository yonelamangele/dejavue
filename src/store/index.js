import { createStore } from 'vuex'

export default createStore({
  state: {
    friends: null,
    gaming_consoles: null,
    cars: null
  },
  getters: {
  },
  mutations: {
    setFriends(state,gang) {
      state.friends = gang
    },
    setGamingConsole(state,gang) {
      state.gaming_console = gang
    },
    setCars(state,gang) {
      state.cars = gang
    }
  },
  actions: {
    async getAboutMe({commit}){
      let fetchedInfo = await fetch('https://yonelamangele.github.io/json/data/data.json');
      let data = await fetchedInfo.json();
      
      // dependant on json file
      let {aboutMe, projects, education, skills, workExp, testimonials} = data
      
      console.log(data)
      commit('setAboutMe',aboutMe)
      commit('setEducation',education)
      commit('setWorkExp',workExp)
      commit('setProjects',projects)
      commit('setTestimonials',testimonials)
      commit('setSkills',skills)
    }
  },
  modules: {
  }
})
