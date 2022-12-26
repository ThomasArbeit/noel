<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
* {
  padding: unset;
  margin: unset;
  box-sizing: border-box;
}
#app {
  font-family: Poppins;
  height: 100vh;
  width: 100%;
}

body {
  position: relative;
  background: #FEBABB;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

h1 {
 font-size: 24px;
 line-height: 32px;
 word-spacing: -3%;
 margin-bottom: 16px;
 font-weight: 800;

 span {
   color: #BB2D2C;
 }
}

p {
  font-size: 16px;
  color: #303030;
  line-height: 24px;
  margin-bottom: 32px;
}

.small {
  font-size: 10px;
  line-height: 16px;
  color:#BB2D2C;
  margin-bottom: 140px;
}

.accueil {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.santa {
  width: 317px;
  height: 335px;
  margin: 0 auto;
  margin-bottom: 40px;
}

.card {
  position: absolute;
  bottom: 0;
  background: white;
  border-radius: 32px;
  padding: 40px;
  width: calc(100% - 32px);
  height: 400px;
  transition: height .5s;

  &--Choices {
    padding-top: 64px;
    height: 700px;
  }
  &--Dates {
    padding-top: 64px;
    height: 700px;
  }
  &--Recap {
    height: 500px;
  }
}

.button {
  width: 100%;
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: center;
  background:#BB2D2C;
  color: white;
  border-radius: 5px;
  margin-bottom: 8px;

  &--outline {
    background: #FFEBEB;
    color:#BB2D2C;
  }

  &--disabled {
    background: grey;
  }
}

.nav {
  position: absolute; 
  bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
}

.nav-dots {
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: #D9D9D9;

  &--active {
    background:#BB2D2C
  }
}

.gift-box {
  position: absolute; 
  top: 8px;
  height: 128px;
  width: 128px;
  z-index: 3;
  transform: rotate(16deg);
}

.choices {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}

.choice {
  position: relative;
  background: #F4F4F4;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  border-radius: 5px;

  &::after {
    position: absolute;
    content: '';
    height: 8px;
    width: 8px;
    border-radius: 50%;
    right: 16px;
    background: #D9D9D9;
  }

  &--selected {
    background: white;
    border: 1px solid #FEBABB;

    &::after {
      background:#BB2D2C;
    }
  }

}
.date-input {
  display: flex;
  width: 100%;
  padding: 12px 16px;
  outline: none;
  border: unset;
  background:#F4F4F4;
  border-radius: 5px;
  margin-bottom: 8px;

  &::after, &::before {
    display: none;
  }
}
</style>
