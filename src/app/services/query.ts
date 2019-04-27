export const query = `
# Welcome to GraphiQL
##################
# GraphiQL is an in-browser IDE for writing, validating, and
# testing GraphQL queries.
#
# Type queries into this side of the screen, and you will
# see intelligent typeaheads aware of the current GraphQL type schema and
# live syntax and validation errors highlighted within the text.
#
# To bring up the auto-complete at any point, just press Ctrl-Space.
#
# Press the run button above, or Cmd-Enter to execute the query, and the result
# will appear in the pane to the right.
#
#
#
################## Example query for planning a journey
#### Arguments
{
  trip(
    from: {name: "Ukraine"
    coordinates: {
      latitude: {{FROM_LAT}}
      longitude: {{FROM_LNG}}
    }}

    to: {name: "Ukraine"
    coordinates: {
      latitude: {{TO_LAT}}
      longitude: {{TO_LNG}}
    }}


  )

#### Requested fields
  {
    tripPatterns {
      startTime
      duration
      walkDistance

          legs {
            pointsOnLink {
              length
              points
            }
            operator {
              name
            }
            mode
            distance
            line {
              id
              publicCode
              authority{
                name
              }
            }
          }
    }
  }
}`;
