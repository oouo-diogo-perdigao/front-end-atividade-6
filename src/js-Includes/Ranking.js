'use strict';
//usado:
//let
//Classes
//Arrow functions
//Operador Spread


class Ranking{
	/**
	 * Construtor da classe
	 * @param {string} idRecived 
	 */
	constructor (idRecived) {
		//#region Variaveis Constantes
		this._dbName = 'ranking';
		this._dbVer = 6;
		this._tablename = "rank"; //ordem importante
		this._timeUpdateVehicleStatus = 10000;
		//#endregion
	
		//#region Variaveis privadas
		this._id=idRecived;
		this._lg = new Array();
		this._jsonLoad = {};
		this._updateStatusSetTimeout = false; // Guarda o settimeout da próxima chamada ajax
		//#endregion


		if (!window.indexedDB) {
			console.log("Seu navegador não suporta uma versão estável do IndexedDB. Alguns recursos não estarão disponíveis.");
			return;
		}

		let today = new Date();
		let dd = String(today.getDate()).padStart(2, '0');
		let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		let yyyy = today.getFullYear();
		
		today = dd + '/' + mm + '/' + yyyy;
		this._jsonLoad["day"] = today;
		this._jsonLoad["xis"] = 0;
		this._jsonLoad["bol"] = 0;
		this._jsonLoad["lose"] = 0;
		this._readDB();
	}
	/**
	 * Guarda valor necessario na variavel this._jsonLoad
	 * Se dado tiver no banco le, caso nao, le e cria o banco
	 * @returns {undefined}
	 */
	_readDB (){
		var self = this;

		let request = window.indexedDB.open(this._dbName, this._dbVer);
		request.onupgradeneeded = function(event){
			event.target.transaction.abort(); //aborta operações desta requisição do banco
			self._init();
		};
		//banco existe resgata dados
		request.onsuccess = function(event) {
			let db = event.target.result;
			
			db.transaction( self._tablename ).objectStore( self._tablename ).getAll().onsuccess = event => self._readTable(event);
		};
	};

	/**
	 * Somnete cria o dados no banco e insere os valores para consultas futuras
	 * @returns {undefined}
	 */
	_init (){
		var self = this;
		let request = window.indexedDB.open(this._dbName, this._dbVer);
		request.onupgradeneeded = function(event){
			let objectStore = event.target.result.createObjectStore( self._tablename, { keyPath: "day" });
			for (let i in self._jsonLoad) {
				objectStore.createIndex(i, i, { unique: false }); //cria colunas
			}
		};
		request.onsuccess =function(event){
			let db = event.target.result;
			let objectStore = db.transaction( self._tablename, "readwrite").objectStore( self._tablename );
			objectStore.add( self._jsonLoad ); //cria colunas
			//console.warn("iniciar ",self._jsonLoad);
		};
	};

	/**
	 * 
	 * @param {event} event 
	 */
	_readTable(event){
		let tempList = event.target.result;
		this._jsonLoad = {...tempList[0]};
		
		//console.warn("Leu ",this._jsonLoad);
	}

	_save(){
		console.warn("save");
		var self = this;
		let request = window.indexedDB.open(this._dbName, this._dbVer);
		request.onsuccess =function(event){
			let db = event.target.result;
			let objectStore = db.transaction( self._tablename, "readwrite").objectStore( self._tablename );

			console.warn(self._jsonLoad);

			objectStore.put( self._jsonLoad ); //cria colunas
			console.warn("Salvo ",self._jsonLoad);
		};
	}

	addXis (){
		this._jsonLoad["xis"]++;
		this._save();
		return this._jsonLoad["xis"];
	}
	addBol (){
		console.warn(this._jsonLoad);
		this._jsonLoad["bol"]++;
		console.warn(this._jsonLoad["bol"]);
		this._save();
		return this._jsonLoad["bol"];
	}
	addLose (){
		this._jsonLoad["lose"]++;
		this._save();
		return this._jsonLoad["lose"];
	}
}

export {Ranking};