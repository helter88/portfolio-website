export const numberSlides = (width:number) => {
    if (width >= 700) {
      return 4;
    } else if (width < 700 && width >= 600){
      return 3;
    } else if (width < 600 && width >= 400) {
      return 2
    } else {
      return 1
    }
  }

export const spaceBetweenValue = (width:number) => {
    if (width >= 700) {
      return 5;
    } else if (width < 700 && width >= 600){
      return 3;
    } else if (width < 600 && width >= 400) {
      return 2
    } else {
      return 1
    }
  }

export const implementNavigation = (width:number) => {
    if (width >= 500) {
      return true
     } else {
      return false
    }
  }
export const implementPagination = (width:number) => {
    if (width >= 400) {
      return {
        clickable: true,
      }
     } else {
      return false
    }
  }