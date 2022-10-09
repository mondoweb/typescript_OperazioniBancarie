
/*

realizza un'applicazione che simuli la gestione di conti bancari.

La classe ContoBancario dovrà svolgere il compito principale all'interno dell'applicazione.
Tramite questa classe si creeranno oggetti che permetteranno di accedere al conto tramite l'inserimento del codice segreto
Una volta fatto accesso al conto verra stampato a video il saldo, l'iban e la lista dei movimenti.

Inoltre tramite la classe conto bancario dovrà essere possibile effettuare operazioni quali: prelievo, bonifico e acquisto.
Tutte queste operazioni potranno essere effettuate solo se durante l'operazione sarà inserito il codice segreto.
Ovviamente le operazioni dovranno impattare sul saldo ed essere registrate all'interno della lista dei movimenti.
NB: non dovrà essere possibile effettuare un'operazione se il saldo sarà inferiore alla cifra dell'operazione.

suggerimento: in typescript come in javascript le classi possono avere anche array come variabili.


punto facoltativo: Potete immaginare anche una classe esterna che simuli l'arrivo dello stipendio sui conti bancari,
così da realizzare anche un'entrata economica sul saldo bancario, anche questa dovrà figurare sulla lista dei movimenti.

*/

/*   **************************  Interfaccia Codice  **************************     */
interface Cod{
    cod_segreto : string;
}

/*   **************************  Interfaccia Utente  **************************     */
interface Utente {
  nome: string;
  cognome: string;
}


/*   ************************** Banca  **************************     */
abstract  class Banca {
  abstract saldoTot(): void;
}


/*   **************************  Conto Bancario **************************     */
class ContoBancario   extends Banca   implements    Utente , Cod{

    nome: string;
    cognome: string;
    saldo: number ;
    iban: string;
    cod_segreto : string;
    arr: [string];


    constructor(nome: string , cognome: string , saldo: number , iban : string , cod_segreto : string,  arr: [string]) {
        super( )
        this.nome = nome;
        this.cognome = cognome;
        this.saldo = saldo;
        this.iban = iban;
        this.cod_segreto= cod_segreto ;
        this.arr = arr;
      }

       saldoTot():number{
        return(  this.saldo )
      }

}

/*   ************************** class  Stipendio **************************     */
class Stipendio extends ContoBancario{
    accredito_stipendio ?: number;
    dataCorrnte?: Date

    constructor(nome: string , cognome: string ,  saldo: number , iban : string , cod_segreto : string,  arr: [string] ,  accredito_stipendio : number  , dataCorrnte: Date)   {
       super( nome , cognome , saldo , iban , cod_segreto ,  arr);
       this. accredito_stipendio =  accredito_stipendio ;   
       this.dataCorrnte = dataCorrnte ;
         }

         saldoTot():number{
          return(  this.saldo )
        }
  
}


/*   **************************  Istanziato   **************************     */
 const Cc_Franco = new  ContoBancario("Franco" , "Neri" , 100 , "IT111111" , "hhh1"  , [""]);
 const Cc_Luca = new  ContoBancario( " Luca" , "Rossi " , 2000, "IT2222" ,"hhh2" ,["bonifico"]);
 const Cc_Giacomo = new  ContoBancario("Giacomo " , " Verdi" , 3000 , "IT33333" ,"hhh3" ,[" acquisto"]);
 const Cc_Alberto = new  ContoBancario("Alberto " , "Blu " , 4000 , "IT44444" ,"hhh4" ,[" acquisto , prelievo"]);
 const Cc_Crescenzo = new  ContoBancario("Crescenzo " , "Esposito " , 5000 , "IT55555" ,"hhh5" ,[" acquisto , prelievo , bonifico"]);

 const Piero_Stipendio = new  Stipendio(" Piero" , " Rossi" , 11000, "IT55555" ,"hhh6" ,[" acquisto , prelievo , bonifico"] , 0 , new Date()  );
 const Giorgio_Stipendio = new  Stipendio("Giorgio " , "Neri " , 12000, "IT55555" ,"hhh7" ,[" acquisto , prelievo , bonifico"] , 1500 , new Date() );
// ${  }
 const d =new Date()
 let a = ` ${d.getDate()}/  ${  d.getMonth()}/  ${d.getFullYear()   } " alle ore "  ${  d.getHours() } :  ${ d.getMinutes() } : ${ d.getSeconds() } `
 console.log( a )


/*   **************************  Array  **************************     */
 const  listaPersone_CC : ContoBancario[] = [ Cc_Franco , Cc_Luca ,Cc_Giacomo , Cc_Alberto, Cc_Crescenzo , Piero_Stipendio  ,  Giorgio_Stipendio  ];

//  listaPersone_CC[0].arr
// console.log(listaPersone_CC[0].arr)




/*   **************************  Opearazioni   **************************     */
/*  *********   __versamento *********    */
const  __versamento = ( code : string , EstrattoaOprerazioni : string,  vers : number , arrCont :  ContoBancario[] , ) => {

  for(let e of  arrCont  ){
    if(e.cod_segreto == code){
      if( accredito == EstrattoaOprerazioni){
       listaPersone_CC[ e.arr.push(EstrattoaOprerazioni)];
        return  e.saldo + vers;
      }
    }
  }
  
}
/*  *********  __prelievo *********    */
const  __prelievo = (code : string , prelString: string ,  prel : number , arrCont :  ContoBancario[]): number => {
   let  conto = 0;
 
   for(let el of  arrCont  ){
      
      if(el.cod_segreto == code){
      
        if( el.saldo > prel &&  OperazioniBancarie.Prelievo > 0 && prelievo == prelString   ){
          listaPersone_CC[ el.arr.push( prelString)];
            // console.log(el.saldoTot() - prel)
           return conto +=  el.saldo -  prel    ;
        
          }
         else if( el.saldo < prel &&  OperazioniBancarie.Prelievo > 0 && prelievo == prelString   ){
            listaPersone_CC[ el.arr.push( prelString)];
            console.log(`Impossibile.....   in conto non hai  €${prel}`)
              return  conto += el.saldo -  prel ;
            }
          else if(  OperazioniBancarie.Prelievo == 0  &&  prelievo == prelString){
            console.log(` hai messo importo da prelevare €0,00 `)
            return  prel
          }
      }
    }
    return conto;
   
  }

  /*    *********   __acquisto   *********    */
  const  __acquisto = (code : string , acquistoString : string , acquisto_generale : number , arrCont :  ContoBancario[]) => {
    for(let el of  arrCont  ){
      if(el.cod_segreto== code){
        if( el.saldo > acquisto_generale &&  OperazioniBancarie.Acquisto > 0 && acquisto == acquistoString   ){
          listaPersone_CC[ el.arr.push(acquistoString)];
            return  el.saldo  -  acquisto_generale;
          }
         else if( el.saldo < acquisto_generale &&  OperazioniBancarie.Acquisto > 0 && acquisto ==acquistoString   ){
            listaPersone_CC[ el.arr.push(acquistoString)];
            console.log(`Impossibile.....   in conto a saldo non hai  €${ acquisto_generale } hai ${el.saldo}`)
              return  el.saldo -  acquisto_generale ;
            }
          else if(  OperazioniBancarie.BonificoRicevuto == 0  &&  acquisto == acquistoString){
            console.log(` hai messo credito €0,00 `)
            return
          }
        listaPersone_CC[ el.arr.push( acquistoString  )];
        return  el.saldo -  acquisto_generale;
      }
    }
  }

  /*    *********  __bonificoricevuto *********    */
  const  __bonificoricevuto = (code : string , bonifRicevuto1: string,  bonifico_generale : number ,   arrCont :  ContoBancario[]) => {
    for(let e of  arrCont  ){
      if(e.cod_segreto== code){
          if(  OperazioniBancarie.BonificoRicevuto > 0  &&  bonifRicevut == bonifRicevuto1){
          listaPersone_CC[   e.arr.push( bonifRicevuto1)];
            return  e.saldo +  bonifico_generale;
          }
          else if(  OperazioniBancarie.BonificoRicevuto == 0  &&  bonifRicevut == bonifRicevuto1){
           
              console.log(` hai ricevuti credito €0,00`)
            }
      }
    }
  }

 /*   *********  __accreditoDipendente *********    */
  const  __accreditoDipendente = ( code : string , accreditSring: string ,  accredit : number , arrCont :  ContoBancario[]) => {
      for(let e of  arrCont  ){
            if(e.cod_segreto == code){
            listaPersone_CC[  e.arr.push(accreditSring)] ;
                return e.saldo + accredit;
            }
      }

  }
   /*  *********   __bonificoEffetuato    *********    */
  const  __bonificoEffetuato  = (code : string , bonifEffetuato1: string,  bonifico_generale : number ,   arrCont :  ContoBancario[]) => {
      for(let el of  arrCont  ){
            if(el.cod_segreto == code){
                if( el.saldo > bonifico_generale &&  OperazioniBancarie.BonificoEffettuato > 0 && bonifEffetuato == bonifEffetuato1   ){
                listaPersone_CC[ el.arr.push( bonifEffetuato1)];
                  return  el.saldo -  bonifico_generale;
                }
               else if( el.saldo < bonifico_generale &&  OperazioniBancarie.BonificoEffettuato > 0 && bonifEffetuato == bonifEffetuato1   ){
                  listaPersone_CC[ el.arr.push( bonifEffetuato1)];
                  console.log(`Impossibile.....   in conto non hai  €${bonifico_generale}`)
                    return  el.saldo -  bonifico_generale ;
                  }
                else if(  OperazioniBancarie.BonificoRicevuto == 0  &&  bonifEffetuato == bonifEffetuato1){
                  console.log(` hai messo credito €0,00 `)
                  return
                }
            }
      }
  }
  
  




/*    ************************** Function   FAT  Arrow    **************************    */                                                        
const findCodeSecret = (  codice : string  , operazioni : string ,    azioni: number ,    arrCont :  ContoBancario[]  ):any => {

  let Porta_conto: any ;
   
      if( codice  == "" ) {
        console.log(` Errore... , Digitare il codice segreto !`);
      //  alert(` Errore... , Digitare il codice segreto !`);
        return
     }

    for(let el of arrCont){

    let prodot_intef : any;
 /*  Stipendio */ 


     if( el instanceof Stipendio){
        prodot_intef= <Stipendio> el;

      if(el.cod_segreto == codice ){

              if( OperazioniBancarie.BonificoRicevuto  == azioni  ){
                     console.log(`Salve ${el.nome} ${el.cognome}  IL BONIFICO è stato accreditato corretamente.......  Il saldo  era di € ${el.saldo},00 il tuo iban è  ${el.iban} 
                            il tuo saldo  Attuale  è di €  : ${ __bonificoricevuto(codice ,  operazioni  , azioni , listaPersone_CC)},00     `)
                return;
              }
              else if( OperazioniBancarie.Prelievo == azioni  ){
                if(el.saldo > 0){
                console.log(`Salve ${ el.nome} ${el.cognome}   IL PRELIEVO €${OperazioniBancarie.Prelievo} è andato a Buon fine....... 
                    Il saldo  era di € ${el.saldo},00 il tuo iban è  ${el.iban} 
                    Attualmente il saldo è di €  : ${ Porta_conto =  __prelievo(codice ,  operazioni  , azioni , listaPersone_CC)},00.
                    
                  LISTA  Movimenti:${el.arr}: €${OperazioniBancarie.Prelievo} il saldo TOT è di €: ${ __prelievo(codice ,  operazioni  , azioni , listaPersone_CC)},00  \n` )
                return;
              }
              else  {
                console.log(` Salve ${el.nome} ${el.cognome} Non hai suffiente saldo € ${el.saldo}, 00 per EFFETUARE  il PRELIEVO... 
                Accredita per effettuare altre operazioni Bancarie. `)
                return;
              }
           }
              else if( OperazioniBancarie.BonificoEffettuato == azioni  ){
                    if(el.saldo > 0){
                      console.log(` Salve ${el.nome} ${el.cognome}  IL BONIFICO è stato EFFETUATO  corretamente.......  
                      Il saldo  era di € ${el.saldo},00 il tuo iban è  ${el.iban} 
                      Attualmente il saldo è di €${ __bonificoEffetuato(codice , operazioni  , azioni , listaPersone_CC)},00    )

                      LISTA  Movimenti:${el.arr}: €${OperazioniBancarie.BonificoEffettuato} il saldo TOT è di €: ${__bonificoEffetuato(codice ,  operazioni  , azioni , listaPersone_CC)},00  \n` )
                        return;
                    }
                    console.log(` Salve ${el.nome} ${el.cognome} Non hai suffiente saldo € ${el.saldo}, 00 per EFFETUARE  il BONIFICO... 
                                  Accredita per effettuare le operazioni Bancarie. `)
              
              }
              else if( OperazioniBancarie.Acquisto  == azioni  ){
                console.log(`Salve ${el.nome} ${el.cognome}  l' Acquisto di €${OperazioniBancarie.Acquisto} è stato EFFETUATO corretamente....... 
                     Il saldo  era di € ${el.saldo},00 il tuo iban è  ${el.iban} 
                     Attualmente il saldo è di €  : ${ __accreditoDipendente(codice ,  operazioni  , azioni , listaPersone_CC)},00.
                    
                   LISTA  Movimenti : ${el.arr}`)
                return  ;
              }
              else if( OperazioniBancarie.AccreditoDipendente == azioni  ){
                console.log(`Salve ${el.nome} ${el.cognome}  l'Accredito  di €${OperazioniBancarie.AccreditoDipendente} è stato Accreditato corretamente....... 
                     Il saldo  era di € ${el.saldo},00 il tuo iban è  ${el.iban} 
                     Attualmente il saldo è di €  : ${ __accreditoDipendente(codice ,  operazioni  , azioni , listaPersone_CC)},00.
                    
                   LISTA  Movimenti : ${el.arr}`)
                return;
              }
  
    }

  }

   /* Bancario */
 if( el instanceof ContoBancario){
  prodot_intef= <ContoBancario> el;
 
     if(  el.cod_segreto == codice ){
           if(el.saldo <= 0){
             console.log(`Conto in Rosso, DEVI rientrare`);
             return
           }

         else if( OperazioniBancarie.BonificoEffettuato  == azioni  ){
           console.log(`Salve ${el.nome} ${el.cognome}  IL BONIFICO di €${OperazioniBancarie.BonificoRicevuto} è stato EFFETUATO corretamente....... 
                Il saldo  era di € ${el.saldo},00 il tuo iban è  ${el.iban} 
                Attualmente il saldo è di €  : ${ __bonificoEffetuato(codice ,  operazioni  , azioni , listaPersone_CC)},00.
               
              LISTA  Movimenti : ${el.arr}`)
           return;
         }
     
         else if( OperazioniBancarie.Acquisto  == azioni  ){
           console.log(`Salve ${el.nome} ${el.cognome}  l' Acquisto di €${OperazioniBancarie.Acquisto} è stato EFFETUATO corretamente....... 
                Il saldo  era di € ${el.saldo},00 il tuo iban è  ${el.iban} 
                Attualmente il saldo è di €  : ${ __acquisto(codice ,  operazioni  , azioni , listaPersone_CC)},00.
               
              LISTA  Movimenti : ${el.arr}`)
           return;
         }

         else if( OperazioniBancarie.BonificoRicevuto  == azioni  ){
           console.log(`Salve ${ el.nome} ${el.cognome}  IL BONIFICO di €${OperazioniBancarie.BonificoRicevuto} è stato accreditato corretamente....... 
                Il saldo  era di € ${el.saldo},00 il tuo iban è  ${el.iban} 
               Attualmente il saldo è di €  : ${ __bonificoricevuto(codice ,  operazioni  , azioni , listaPersone_CC)},00.  
              LISTA  Movimenti : ${el.arr}`)
           return;
         }
         else if( OperazioniBancarie.Prelievo == azioni  ){

          // let ffff:any;
          let ffff: string | number ;
               if(el.saldo > 0 && el.saldo > input_prelievo){
            
                ffff =  `Salve ${ el.nome} ${el.cognome}   IL PRELIEVO €${OperazioniBancarie.Prelievo} è andato a Buon fine....... 
                Il saldo  era di € ${el.saldo},00 il tuo iban è  ${el.iban} 
                Attualmente il saldo è di €  : ${ __prelievo(codice ,  operazioni  , azioni , listaPersone_CC) },00. 
                LISTA  Movimenti : ${el.arr} `;
                
                   /*
               console.log(`Salve ${ el.nome} ${el.cognome}   IL PRELIEVO €${OperazioniBancarie.Prelievo} è andato a Buon fine....... 
                   Il saldo  era di € ${el.saldo},00 il tuo iban è  ${el.iban} 
                   Attualmente il saldo è di €  : ${ __prelievo(codice ,  operazioni  , azioni , listaPersone_CC) },00.
                 LISTA  Movimenti : ${el.arr}`)
                 */
                 
                //  console.log(ffff)
               return    ffff;
               
           
             }
             else if( el.saldo < input_prelievo)  {
               console.log(` Salve ${el.nome} ${el.cognome} Non hai suffiente saldo € ${el.saldo}, 00 per EFFETUARE  il PRELIEVO... 
               Accredita per effettuare altre operazioni Bancarie. `)
               return;
             }
          }
  
       }
     }

  
}
console.log("il Codice segreto è sbagliato, Digita di nuovo ......!!");

return Porta_conto;
}




const input_bonificoEffetuato = 110;
const input_acquisto= 500;
const input_prelievo = 30;
const input_versamento = 100;
const input_bonificoRicevuto = 320;
const input_accreditoDipendente  = 2100;

/* Enum */
enum OperazioniBancarie {

   BonificoEffettuato =  input_bonificoEffetuato  ,
   Acquisto = input_acquisto ,
   Prelievo = input_prelievo,
   Versamento = input_versamento,
   BonificoRicevuto = input_bonificoRicevuto ,
   AccreditoDipendente = input_accreditoDipendente ,

}

const prelievo = "prelievo";
const bonifEffetuato = "BonificoEffetuato";
const bonifRicevut = "BonificoRicevuto";
const accredito = "Accredito";
const acquisto = "Acquisto";


console.log(listaPersone_CC[0].saldo);
console.log( findCodeSecret( "hhh1" ,  prelievo   , OperazioniBancarie.Prelievo,  listaPersone_CC ));




/*
const inp : string = document.querySelector(".input");
inp.value;


const nom: any = document.getElementById('nome');

nom.textContent="ciao sono typescript";
nom.style.color= "red";

*/



