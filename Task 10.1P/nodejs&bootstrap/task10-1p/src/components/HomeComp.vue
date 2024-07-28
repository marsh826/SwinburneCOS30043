<template>
    <h1>{{ msg }} {{firstName}} {{ lastName }}!</h1>
    <br><br>
    <h3>What is your name?</h3>
        <form>
            <div class="row g-3 mb-3 d-flex justify-content-center">
                <div class="col-auto">
                    <label class="form-label" for="fName">First Name:</label>    
                </div>
                <div class="col-auto">
                    <input id="fname" class="form-control" type="text" v-model="firstName">
                </div>
            </div>
            <div class="row g-3  mb-3 d-flex justify-content-center">
                <div class="col-auto">
                    <label class="form-label" for="lName">Last Name:</label>
                </div>
                <div class="col-auto">
                    <input id="lName" class="form-control" type="text" v-model="lastName">    
                </div> 
            </div>

            <div class="row g-3  mb-3 d-flex justify-content-center">
                <div class="col-auto">
                    <div class="row g-3  mb-3 d-flex justify-content-center">
                        <div class="col-auto">
                            <input 
                                class="form-check-input" 
                                v-model="imageSelect" type="radio" name="type" id="ocean"
                                value="ocean"
                            >
                        </div>
                        <div class="col-auto">
                            <label for="ocean">Ocean</label>
                        </div>
                    </div>  
                </div>
                <div class="col-auto">
                    <div class="row g-3  mb-3 d-flex justify-content-center">
                        <div class="col-auto">
                            <input 
                                class="form-check-input" 
                                v-model="imageSelect" type="radio" name="type" id="mountain"
                            value="mountain">
                        </div>
                        <div class="col-auto">
                            <label for="mountain">Mountain</label>
                        </div>
                    </div>
                </div>
            </div>
            <img v-if="imageSelect == 'ocean'" src="../assets/img/ocean.jpg" class="img-thumbnail w-25" alt="theOcean"> 
            <img v-else src="../assets/img/mountain.jpg" class="img-thumbnail w-25" alt="theMountain"> 
        </form>
</template>

<script>
export default {
  name: 'HomeComp',
  props: {
    msg: String
  },
  data() {
    return {
        firstName: "",
        lastName: "",
        imageSelect: "ocean"
    }
  },
  methods: {
    // toggleImage: function(option) {
    //     if(option == "ocean"){
    //         this.imageSelect = "ocean"
    //     }
    // }
  }
}
</script>