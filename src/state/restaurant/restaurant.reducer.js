const initialState = {
  list: [
    {
      id: '1',
      imageSource: 'https://bit.ly/3r4QQ74',
      name: 'Good Burger',
      categories: ['Fast Food'],
      rating: 5,
      additionalInformation: [
        'Family Friendly',
        'WiFi',
        'Take Away',
        'Dinning',
      ],
      averagePriceForTwo: 1000,
      city: 'Colombo',
      address: '123 Colombo',
      open: true,
    },
    {
      id: '2',
      imageSource: 'https://bit.ly/38fHgpv',
      name: 'Big Burger',
      categories: ['Fast Food'],
      rating: 5,
      additionalInformation: [
        'Family Friendly',
        'WiFi',
        'Take Away',
        'Dinning',
      ],
      averagePriceForTwo: 1000,
      city: 'Colombo',
      address: '123 Colombo',
      open: true,
    },
    {
      id: '3',
      imageSource: 'https://bit.ly/3p63MYv',
      name: 'Awesome Pizza',
      categories: ['Fast Food'],
      rating: 5,
      additionalInformation: [
        'Family Friendly',
        'WiFi',
        'Take Away',
        'Dinning',
      ],
      averagePriceForTwo: 4000,
      city: 'Colombo',
      address: '434 Colombo',
      open: true,
    },
  ],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
};
