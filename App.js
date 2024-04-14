import 'bootstrap/dist/css/bootstrap.min.css';
import React from'react';

function App() {
  return (
    <>
        <nav class="navbar navbar-expand-sm bg-light">
            <div class="container-fluid">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#Abt">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#ff">Fun Facts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#ff">More</a>
                    </li>
                </ul>
            </div>
        </nav><div className="container">
                <h1>Spiderman</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="Abt">
                          <p>Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books. He has been featured in comic books, television shows, films, video games, novels, and plays.</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="Img">
                        <img
                            src="https://static3.thegamerimages.com/wordpress/wp-content/uploads/2021/04/spider-man-tobey-maguire.jpg"
                            className="img-fluid rounded"
                            alt="Spiderman" />
                    </div>
                    </div>
                    </div>
                    <br/><br/><br/><br/><br/><br/>
                    <div className="row">
                    <div className="col-md-6">
                        <div className="Imgt">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/b/b3/Spider-Man_characters.jpeg"
                            className="img-fluid rounded"
                            alt="Spiderman" />
                    </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ff">
<ul>
  <li>Spider-Man was created by Stan Lee and Steve Ditko, and first appeared in August 1962 in Amazing Fantasy #15.</li>
  <li>Stan Lee actually wanted to base a comic on a fly or insect but decided on a spider.</li>
  <li>The correct way of writing the spider’s name is actually Spider-Man, with a hyphen to avoid confusion with “Superman”.</li>
  <li>Spider-Man’s web dissolves within an hour and yet is strong enough to hold the Hulk.</li>
  <li>The Amazing Spider-Man finally made his last appearance in volume 1 in the 700th edition, released December 2012.</li>
</ul>
                        </div>
                    </div>
                    
                </div>
                <br/><br/><br/><br/><br/><br/>
                <div className="row">
                    <div className="col-md-8">
<div id='More'>
    <p>Spider-Man's secret identity is Peter Benjamin Parker. Initially, Peter was depicted as a teenage high-school student and an orphan raised by his Aunt May and Uncle Ben in New York City after his parents Richard and Mary Parker died in a plane crash. Lee and Ditko had the character deal with the struggles of adolescence and financial issues and gave him many supporting characters, such as Flash Thompson, J. Jonah Jameson, and Harry Osborn; romantic interests Gwen Stacy, Mary Jane Watson, and the Black Cat; and enemies such as the Green Goblin, Doctor Octopus, and Venom. In his origin story, Spider-Man gets his superhuman spider-powers and abilities after being bitten by a radioactive spider. These powers include superhuman strength, agility, reflexes, stamina, durability, coordination, and balance; clinging to surfaces and ceilings like a spider; and detecting danger with his precognition ability called "spider-sense".</p>
</div>
</div>
<div className="col-md-4">
    
<div className="Imgg">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png"
                            className="img-fluid rounded"
                            alt="Spiderman" />
                            
                    </div>         
</div>


</div>



            </div>
            <br/><br/>
            </>

   
  );
}

export default App;
