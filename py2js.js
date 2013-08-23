/*Copyright (c) 2013 Sripathi Pai
All rights reserved.
paisripathi at gmail dot com

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:
1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.
3. The name of the author may not be used to endorse or promote products
   derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

String.prototype.count = function(ch){
    var i,c =0;
    if(typeof ch ==='string'){
        i = this.indexOf(ch);
        while(i != -1){
            c++;
            i = this.indexOf(ch,++i)
        }
        return c;
    }
    else {
        throw ("Type Error");
    
    }
    return c;

}

String.prototype.reverse = function() {
    return this.split('').reverse().join('');

}

String.prototype.title = function() {
    var a,i,l,s=[];
    a = this.trim().split(" ");
    l = a.length;
    for(i=0;i<l;i++){
        s.push(a[i].toString().replace(a[i][0],a[i][0].toUpperCase()));
    
    }
    
    return s.join(" ");

}

String.prototype.capitalize = function() {
    return this.toLowerCase().replace(this[0].toLowerCase(),this[0].toUpperCase());

}

String.prototype.isUpper = function() {
    var i=0;
     if(/(?=.*[a-z])/g.test(this)){
        return false;
     }
     return true;
}
String.prototype.isLower = function() {
    
    if((/(?=.*[A-Z])/g).test(this)) {
        return false;
    
    }
    
        return true;
    
    
}

String.prototype.swapCase = function() {
    var i,a=[],c='',l;
    a = this.split('');
    l = this.length;
    for(i=0;i<l;i++){
        if(a[i].isUpper()) {
            c = c+a[i].toUpperCase();
        
        }
        else {
            c = c+a[i].toLowerCase();
        }
    
    }
    return c;

}

String.prototype.isAlphaNum = function() {
    
    if((/\s/g).test(this)|| (/[^a-zA-Zs0-9]/g).test(this)){
        return false;
    
    }
    else {
        if((/\w\d/g).test(this)){
            return true;
        }
        
        else {
            return false;
        }
    
    }

}

String.prototype.contains = function(c)  {
    var re;
    re = new Regex(c,g);
    if(re.test(this)){
        return true;
    }
    else {
        return false;
    
    }

}

String.prototype.equals = function(s){
    var i=0,a,l;
    a = s.split('');
    l = s.length;
    if(l != this.length){
        return false;
    
    }
    else {
    while(i<l){
        if(this[i] != s[i]) {
            return false;
        
        }
        i++
    }
        return true;
    }

}

String.prototype.isEmpty = function() {

    if((/[\s\t\n]/g).test(this) || (this.length) ==0) {
        return true;

    }
    return false;
 }

String.prototype.isAlpha = function() {
    return !(/[^a-zA-Z]/g.test(this));

}

String.prototype.isDigit = function() {

    return !(/[^0-9]/g.test(this));
}

String.prototype.isTitle = function() {
    var i,l,s;
    a = this.split(" ");
    l = a.length;
    for (i=0;i<l;i++){
        if(!a[i][0].isUpper()){
            return false
        
        }
    
    }
    return true

}

