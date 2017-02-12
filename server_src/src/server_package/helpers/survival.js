export const newSurvivalPlayer = () => ({
  level: 0,
  primitiveNeeds: {
    food: 100,
    water: 100,
  },
  iventory: {
    bagsAmeliorations: 0,
    items: [
      {
        name: 'waterBottle-25cl',
        type: 'survival',
        quantity: '2',
        params: {
          state: 'full'
        }
      },
      {
        name: 'pistol',
        type: 'weapon',
        quantity: '1',
        params: {
          name: "The Little General",
          model_name: "w014_handgun_little_general",
          hash: 0xc50781e6,
          class: "pistols",
          dlc: null,
        }
      }
    ]
  }
});