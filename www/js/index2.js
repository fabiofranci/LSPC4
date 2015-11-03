$(document).on('deviceready', function() {

    function getDateTime() {
    var now     = new Date();
    var year    = now.getFullYear();
    var month   = now.getMonth()+1;
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds();
    if(month.toString().length == 1) {
        var month = '0'+month;
    }
    if(day.toString().length == 1) {
        var day = '0'+day;
    }
    if(hour.toString().length == 1) {
        var hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
        var minute = '0'+minute;
    }
    if(second.toString().length == 1) {
        var second = '0'+second;
    }
    var dateTime = year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second;
    return dateTime;
}
//---------------------------------------------------------------------------------------
// (i) GLOBALI
//---------------------------------------------------------------------------------------
var global_ultimo_aggiornamento='';

var AggiornamentiPostazioni=false;
var AggiornamentiVisite=false;
var AggiornamentiIspezioni=false;

var IDDIPENDENTE=5;
//Mettere il login con il PIN

var len, datiRiga, lastinsertid=0, newid=0, VisiteInCorso=0, VisiteArchivio=0;
var visitedb;

var reteOk;
var today = new Date();
var READALL=1;

var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) { dd='0'+dd; }

if(mm<10) { mm='0'+mm; }

today = dd+'/'+mm+'/'+yyyy;
todayMySql = yyyy+'-'+mm+'-'+dd;

var serviceURL = "http://www.lasaetta.studioweb19.it/admin/services/";
var clienti_server;
var sedi_clienti_server;
var tipi_servizio_server;
var postazioni_server;
var visite_server;
var ispezioni_server;
var users_server;
var scanText='';
var postazioneCorrente={};
var VisitaCorrente={};

var sedi=new Array(); //lo popoliamo dopo getSediClientiListFromServer()
var descrizioniservizio=new Array(); //lo popoliamo getTipiServizioListFromServer()
var tipiservizio=new Array(); //lo popoliamo getTipiServizioListFromServer()
var users=new Array(); //lo popoliamo dopo getUsersListFromServer()


// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var onSuccessGeo = function(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
        'Longitude: '         + position.coords.longitude         + '\n' +
        'Altitude: '          + position.coords.altitude          + '\n' +
        'Accuracy: '          + position.coords.accuracy          + '\n' +
        'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
        'Heading: '           + position.coords.heading           + '\n' +
        'Speed: '             + position.coords.speed             + '\n' +
        'Timestamp: '         + position.timestamp                + '\n');
};

// onError Callback receives a PositionError object
//
function onErrorGeo(error) {
    alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}

function getPosizione() {
    try {
        navigator.geolocation.getCurrentPosition(onSuccessGeo, onErrorGeo);
    } catch (err) {
        alert("Sono in locale, niente posizione");
    }
}

alert("Eccomi qui");

});
