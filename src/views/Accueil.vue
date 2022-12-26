<template>
 <div class="accueil">
  <img class="santa" v-if="routerName === 'Accueil' || routerName === 'Recap'" src="../assets/santa.jpg" alt="">
  <img class="gift-box" v-if="routerName === 'Choices' || routerName === 'Dates'" src="../assets/gift-box.png" alt="">
  <div class="card" :class="[
   `card--${routerName}`
  ]">
   <template v-if="routerName === 'Accueil'">
    <h1>
     Ho,Ho,Ho ! <br>
     Joyeux Noël <span>Isabelle</span>
    </h1>
    <p>
     Il semblerait qu'un cadeau vienne d'arriver pour toi !
    </p>
    <div class="button" @click="routerName = 'Choices'">Voir mon cadeau</div>
   </template>

   <template v-if="routerName === 'Choices'">
    <h1>
     <span>1</span> bon pour une séance au <span>Boudoir de SaGe</span>
    </h1>
    <p>
     Tu as le choix parmis ces 6 types de massages, choisis bien !
    </p>
    <div class="choices">
     <div class="choice" :class="{'choice--selected': selectedChoiceId === choice.id}" @click="selectChoice(choice)" v-for="choice in choices" :key="choice.id">{{choice.label}}</div>
    </div>
    <div class="button" :class="{'button--disabled' : selectedChoiceId === null}" @click="routerName = 'Dates'">Suivant</div>
   </template>

   <template v-if="routerName === 'Dates'">
    <h1>
     Tu as Choisis le :
    </h1>
    <div class="choices">
     <div class="choice choice--selected">{{choices.filter(x => x.id === selectedChoiceId)[0].label}}</div>
    </div>

    <p>
     Choisis maintenant une date qui te convient !
    </p>

    <input class="date-input" type="date" min="2022-25-12" max="2023-25-12" v-model="date" placeholder="jj/mm/aaaa">
    <div class="small">La date choisie pourra varier en fonction des disponibilités du salon de massage</div>
    <div class="button button--outline" @click="routerName = 'Choices'">Précédent</div>
    <div class="button" :class="{'button--disabled' : selectedChoiceId === null}" @click="save()">Valider</div>
   </template>

   <template v-if="routerName === 'Recap'">
    <h1>
     Y a plus qu'à attendre !
    </h1>
    <p>
     Evidemment, si tu souhaites modifier ton choix, c'est encore possible !
    </p>
    <div class="choices">
     <div class="choice choice--selected">{{choices.filter(x => x.id === selectedChoiceId)[0].label}}</div>
    </div>


    <div class="choice choice--selected">{{ new Date(date).toLocaleDateString() }}</div>
    <div class="button" style="margin-top: 60px;" @click="routerName = 'Choices'">Modifier mes choix</div>
   </template>

  </div>
  <div class="nav">
      <span class="nav-dots" :class="{'nav-dots--active': routerName === 'Accueil'}" @click="routerName = 'Accueil'"></span>
      <span class="nav-dots" :class="{'nav-dots--active': routerName === 'Choices'}" @click="routerName = 'Choices'"></span>
      <span class="nav-dots" :class="{'nav-dots--active': routerName === 'Dates'}" @click="routerName = 'Dates'"></span>
      <span class="nav-dots" :class="{'nav-dots--active': routerName === 'Recap'}"></span>
    </div>
 </div>
</template>

<script>

export default {
 data () {
  return {
   routerName: null,
   date: null,
   choices: [
    {
     id: 1,
     label: "Massage Voyage",
    },
    {
     id: 2,
     label: "Massage escale en Inde",
    },
    {
     id: 3,
     label: "Massage singapourien",
    },
    {
     id: 4,
     label: "Massage liftant japonais",
    },
    {
     id: 5,
     label: "Massage silhouette",
    },
    {
     id: 6,
     label: "Massage liberté / intuitif",
    },
   ],
   selectedChoiceId: null,
  };
 },

 mounted () {
  const giftId = localStorage.getItem('giftId');
  const date = localStorage.getItem('date');
  if (giftId) {
   this.selectedChoiceId = this.choices.filter(x => x.id === Number(giftId))[0].id
   this.date = new Date(date);
   this.routerName = 'Recap';
  } else this.routerName = 'Accueil';
 },

 methods: {
  selectChoice (choice) {
   this.selectedChoiceId = choice.id
  },
  save () {
   this.routerName = 'Recap';
   localStorage.setItem('giftId', this.selectedChoiceId);
   localStorage.setItem('date', this.date);
  }
 }
}
</script>
