import React from "react"
import { Link } from "gatsby"

export default ({ pageContext: { allPokemon } }) => (
  <div style={{ width: 960, margin: "4rem auto" }}>
   {allPokemon}
    <h1></h1>
    <h2>Abilities</h2>
    <ul>
    </ul>
	</div>
)

