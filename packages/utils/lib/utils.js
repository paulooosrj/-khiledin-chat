'use strict';

const $ = require('jquery');

class Utils {

    constructor(){
      return this;
    }

    set(property, value){
      this[property] = value;
    }

    gen_id(){
      return Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000);
    }

    session(name, value = null){

      var storage = this['sessionStorage'] || sessionStorage;
      let isSession = storage.getItem(name);

      if (value === null && isSession) {
          return isSession;
      }

      if (value !== null && !isSession) {
        return storage.setItem(name, value) ? true : null;
      }

      return null;

    }

    clear_input(){
      $('.emit-message').val('');
    }

    user_on_exists(p, e = 'default'){
      return (chat) => chat.peoples_add.includes(p.nome);
    }

    to_scroll(){
      let doc = this['document'] || document;
      var o = doc.querySelector('.messages');
      $('.messages').animate({ scrollTop: o.scrollHeight }, 'slow');
    }

    get_user(){
      return ({ user_id = '', nome = '', icon = '' }) => ({
        'id': user_id,
        'nome': nome,
        'icon': icon
      });
    }

    get_horario(){
      var horario = new Date();
      var prefix = (h) => (h < 10) ? "0" + h : h;
      var [hora, minutos, segundos] = [
        prefix(horario.getHours()),
        prefix(horario.getMinutes()),
        prefix(horario.getSeconds())
      ];
      return hora + ':' + minutos + ':' + segundos;
    }

    html_element(html) {
      var d = document.createElement('div');
      d.innerHTML = html;
      return d.firstChild;
    }

    removerAcentos(newStringComAcento) {
      var string = newStringComAcento;
      var mapaAcentosHex = {
        a: /[\xE0-\xE6]/g,
        A: /[\xC0-\xC6]/g,
        e: /[\xE8-\xEB]/g,
        E: /[\xC8-\xCB]/g,
        i: /[\xEC-\xEF]/g,
        I: /[\xCC-\xCF]/g,
        o: /[\xF2-\xF6]/g,
        O: /[\xD2-\xD6]/g,
        u: /[\xF9-\xFC]/g,
        U: /[\xD9-\xDC]/g,
        c: /\xE7/g,
        C: /\xC7/g,
        n: /\xF1/g,
        N: /\xD1/g,
      };
      for (var letra in mapaAcentosHex) {
        var expressaoRegular = mapaAcentosHex[letra];
        string = string.replace(expressaoRegular, letra);
      }
      return string;
    }

    bot_write(out, entrys = []){
      let $ = document.querySelector.bind(document);
      let cout = (entrys.length * 10000) / entrys.length;
      let active = 0;
      let end = entrys.length - 1;
      const w_bot = setInterval(() => {
        var a = entrys[active];
        out.innerHTML = a;
        active++;
        if (active > end) active = 0;
      }, cout);
    }

}

module.exports = new Utils();
