import React from 'react';
import lap1 from '../../images/lap1.jpg';
import lap2 from '../../images/lap2.jpg';
import lap3 from '../../images/lap3.jpg';
import laptop from '../../images/laptop.jpg';
import ecom from '../../images/ecom.jpg';
import monitor from '../../images/monitor.jpg';
import office from '../../images/office.jpg';
import webdesign from '../../images/webdesign.jpg';

function Body(props) {
    return (
        <div >
             <h1 className="text-center">Welcome At Rent Device</h1> 
         <div className="row">
         <div className="col-sm-4">
         <img className="img-fluid" src={lap1} alt=""/>
         </div>
         <div className="col-sm-8">
         <section className="jumbotron fs-2 d-flex justify-content-center" >Nous vous proposons une solution idéale pour satisfaire vos bésoins en ordinateurs
             et terminaux de toute sorte,une location d'un ou plusieurs ordinateurs portables pour votre famille,
             PME,ou TPE pendant la de durée de vos bésoins et dans la limite de votre budget 
            </section> 
            </div>
         </div> 
         <div className="row">
            
             <div className="col-sm-8">
                 <h2 className="text-center"> Utilité plutôt que propriété</h2>
                 <section className="jumbotron fs-3 d-flex justify-content-center">
                     Un projet temporaire? Concentrez votre 
                     energie sur l'éssentiel et le  matériel c'est 
                     notre tâche,vous aurez ainsi le loisir de ne 
                     pas accumuler un parc d'ordinateurs  non/sous  
                     utilisés à recycler.
                 </section>
             </div>
             <div className="col-sm-4">
             <img className="img-fluid" src={laptop} alt="responsive"/>
             </div>
         </div>
         <div className="row">
         <div className="col-sm-1"></div>
          <div className="col-sm-10">
         <div id=" carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
             
             <div className="carousel-inner">
                 <div className="carousel-item active">
                 <img src={ecom} className="img-fluid " alt=""/>
                 </div>
                 <div className="carousel-item">
                     <img src={monitor} className="img-fluid " alt=""/>
                 </div>
                 <div className="carousel-item">
                     <img src={office} className="img-fluid " alt=""/>
                 </div>
                 <div className="carousel-item">
                     <img src={webdesign} className="img-fluid " alt=""/>
                 </div>
            
             </div>
         </div>
         </div>
         <div className="col-sm-1"></div>
         </div>

         
         
            
        </div>
    );
}

export default Body;