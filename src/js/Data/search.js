const uuidv1 = require('uuid');

uuidv1.v1();

let related = uuidv1();

export const dataSearch = {
  search: {
    env: "search",
    inputs: [
      {
        key: uuidv1(),
        name: "location",
        data: {
          label: "Location",
          icon: "pin",
          type: "text",
          required: true,
          value: "",
          values: [
            {
              key: uuidv1(),
              value: "Palau Ujong, Singapore",
              child: null
            },
            {
              key: uuidv1(),
              value: "Jurong, Singapore",
              child: null
            },
            {
              key: uuidv1(),
              value: "Woodlands, Singapore",
              child: null
            },
            {
              key: uuidv1(),
              value: "Tampines, Singapore",
              child: null
            },
            {
              key: uuidv1(),
              value: "Los Angeles, USA",
              child: null
            }
          ]
        }
      },
      {
        key: uuidv1(),
        name: "area",
        data: {
          label: "Area",
          icon: "area",
          type: "text",
          required: true,
          value: "",
          values: [
            {
              key: uuidv1(),
              value: "5 mi",
              child: null
            },
            {
              key: uuidv1(),
              value: "10 mi",
              child: null
            },
            {
              key: uuidv1(),
              value: "15 mi",
              child: null
            },
            {
              key: uuidv1(),
              value: "20 mi",
              child: null
            }
          ]
        }
      },
      {
        key: uuidv1(),
        name: "activity",
        data: {
          label: "Activity",
          icon: "love",
          type: "text",
          required: false,
          value: "",
          values: [
            {
              key: uuidv1(),
              value: "Cooking",
              child: {
                target: related,
                values: [
                  {
                    key: uuidv1(),
                    value: "Italian Cuisine",
                    child: null
                  },
                  {
                    key: uuidv1(),
                    value: "Chinese Cuisine",
                    child: null
                  },
                  {
                    key: uuidv1(),
                    value: "Japanese Cuisine",
                    child: null
                  }
                ]
              }

            },
            {
              key: uuidv1(),
              value: "Sports",
              child: {
                target: related,
                values: [
                  {
                    key: uuidv1(),
                    value: "Baseball",
                    child: null
                  },
                  {
                    key: uuidv1(),
                    value: "Basketball",
                    child: null
                  },
                  {
                    key: uuidv1(),
                    value: "Tennis",
                    child: null
                  },
                  {
                    key: uuidv1(),
                    value: "Football",
                    child: null
                  }
                ]
              }

            }
          ]
        }
      },
      {
        key: related,
        name: "type",
        data: {
          label: "Type",
          icon: "idea",
          type: "text",
          required: false,
          value: "",
          values: []
        }
      }
    ]
  }
};
