export const Pot = (potObject) => {
  return `
  <section class="pottery" id="pottery--${potObject.id}">
  <h2 class="pottery__shape">${potObject.shape}</h2>
  <div class="pottery__properties">
      Item weighs ${potObject.weight} grams and is ${potObject.height} cm in height
  </div>
  <div class="pottery__price">
      Price is $${potObject.price}
  </div>
</section>
  `
}
