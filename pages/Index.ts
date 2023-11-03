
import { createHeadObject } from '@/util/createHeadObject';
import { html } from '@presta/html';

export const getStaticPaths = () => {
  return ["/"];
}

export async function handler(event) {
  return html({
    head: createHeadObject(),
    body: `
    <div class = "content">
      <div class = "title"> 
      Rodrigue Kayembe
      </div>
      <div class = "section bio">
      I'm a software engineer currently on mini retirement. Previously worked at <a href="https://www.alfasystems.com/" target="_blank">Alfa</a> and in a previous life studied law. <br><br>
      I was born in Tshikapa, grew up in Dublin, I am a part-time Londoner and part-time wanderer. <br><br>

      I'm interested in travelling, reading, basketball, lifting, storytelling, entrepreneurship, technology & the internet.

      </div>
      
      <div class="section projects" id = "projects">
        <b> Projects </b> 
      <div>    
      
      <div class="section writing" id = "writing" >
        <b> Writing<b> 
      <div>
      
      <div  class="section misc" id = "misc" >
        <b>Contact/Miscellaneous</b>
        <ul class="misc-list">
        <li><a href=""https://github.com/rodriguekayembe" target="_blank">Github</a>
        <li><a href="https://bsky.app/profile/rodriguekayembe.com" target="_blank">Bluesky</a>
        <li><a href="/scratchpad" target="_blank">Scratchpad</a>
        <li><a target="_blank">Email: contact (at) rodriguekayembe (dot) com</a>
      </div>
    </div>
  `,
  })
}
