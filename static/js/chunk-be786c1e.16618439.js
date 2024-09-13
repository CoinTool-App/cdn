(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be786c1e"],{"1f71":function(e,t,r){"use strict";r.r(t),r.d(t,"CURVE",(function(){return s})),r.d(t,"Point",(function(){return P})),r.d(t,"Signature",(function(){return I})),r.d(t,"getPublicKey",(function(){return ne})),r.d(t,"recoverPublicKey",(function(){return ie})),r.d(t,"getSharedSecret",(function(){return oe})),r.d(t,"sign",(function(){return he})),r.d(t,"signSync",(function(){return be})),r.d(t,"verify",(function(){return ye})),r.d(t,"schnorr",(function(){return Be})),r.d(t,"utils",(function(){return He}));var n=r(30);
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const i=BigInt(0),f=BigInt(1),o=BigInt(2),a=BigInt(3),c=BigInt(8),s=Object.freeze({a:i,b:BigInt(7),P:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:f,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")}),u=(e,t)=>(e+t/o)/t,d={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar(e){const{n:t}=s,r=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),n=-f*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),i=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),o=r,a=BigInt("0x100000000000000000000000000000000"),c=u(o*e,t),d=u(-n*e,t);let h=F(e-c*r-d*i,t),b=F(-c*n-d*o,t);const l=h>a,y=b>a;if(l&&(h=t-h),y&&(b=t-b),h>a||b>a)throw new Error("splitScalarEndo: Endomorphism failed, k="+e);return{k1neg:l,k1:h,k2neg:y,k2:b}}},h=32,b=32,l=32,y=h+1,w=2*h+1;function p(e){const{a:t,b:r}=s,n=F(e*e),i=F(n*e);return F(i+t*e+r)}const g=s.a===i;class m extends Error{constructor(e){super(e)}}function v(e){if(!(e instanceof E))throw new TypeError("JacobianPoint expected")}class E{constructor(e,t,r){this.x=e,this.y=t,this.z=r}static fromAffine(e){if(!(e instanceof P))throw new TypeError("JacobianPoint#fromAffine: expected Point");return e.equals(P.ZERO)?E.ZERO:new E(e.x,e.y,f)}static toAffineBatch(e){const t=Z(e.map(e=>e.z));return e.map((e,r)=>e.toAffine(t[r]))}static normalizeZ(e){return E.toAffineBatch(e).map(E.fromAffine)}equals(e){v(e);const{x:t,y:r,z:n}=this,{x:i,y:f,z:o}=e,a=F(n*n),c=F(o*o),s=F(t*c),u=F(i*a),d=F(F(r*o)*c),h=F(F(f*n)*a);return s===u&&d===h}negate(){return new E(this.x,F(-this.y),this.z)}double(){const{x:e,y:t,z:r}=this,n=F(e*e),i=F(t*t),f=F(i*i),s=e+i,u=F(o*(F(s*s)-n-f)),d=F(a*n),h=F(d*d),b=F(h-o*u),l=F(d*(u-b)-c*f),y=F(o*t*r);return new E(b,l,y)}add(e){v(e);const{x:t,y:r,z:n}=this,{x:f,y:a,z:c}=e;if(f===i||a===i)return this;if(t===i||r===i)return e;const s=F(n*n),u=F(c*c),d=F(t*u),h=F(f*s),b=F(F(r*c)*u),l=F(F(a*n)*s),y=F(h-d),w=F(l-b);if(y===i)return w===i?this.double():E.ZERO;const p=F(y*y),g=F(y*p),m=F(d*p),x=F(w*w-g-o*m),S=F(w*(m-x)-b*g),P=F(n*c*y);return new E(x,S,P)}subtract(e){return this.add(e.negate())}multiplyUnsafe(e){const t=E.ZERO;if("bigint"===typeof e&&e===i)return t;let r=D(e);if(r===f)return this;if(!g){let e=t,n=this;while(r>i)r&f&&(e=e.add(n)),n=n.double(),r>>=f;return e}let{k1neg:n,k1:o,k2neg:a,k2:c}=d.splitScalar(r),s=t,u=t,h=this;while(o>i||c>i)o&f&&(s=s.add(h)),c&f&&(u=u.add(h)),h=h.double(),o>>=f,c>>=f;return n&&(s=s.negate()),a&&(u=u.negate()),u=new E(F(u.x*d.beta),u.y,u.z),s.add(u)}precomputeWindow(e){const t=g?128/e+1:256/e+1,r=[];let n=this,i=n;for(let f=0;f<t;f++){i=n,r.push(i);for(let t=1;t<2**(e-1);t++)i=i.add(n),r.push(i);n=i.double()}return r}wNAF(e,t){!t&&this.equals(E.BASE)&&(t=P.BASE);const r=t&&t._WINDOW_SIZE||1;if(256%r)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let n=t&&S.get(t);n||(n=this.precomputeWindow(r),t&&1!==r&&(n=E.normalizeZ(n),S.set(t,n)));let i=E.ZERO,o=E.BASE;const a=1+(g?128/r:256/r),c=2**(r-1),s=BigInt(2**r-1),u=2**r,d=BigInt(r);for(let h=0;h<a;h++){const t=h*c;let r=Number(e&s);e>>=d,r>c&&(r-=u,e+=f);const a=t,b=t+Math.abs(r)-1,l=h%2!==0,y=r<0;0===r?o=o.add(x(l,n[a])):i=i.add(x(y,n[b]))}return{p:i,f:o}}multiply(e,t){let r,n,i=D(e);if(g){const{k1neg:e,k1:f,k2neg:o,k2:a}=d.splitScalar(i);let{p:c,f:s}=this.wNAF(f,t),{p:u,f:h}=this.wNAF(a,t);c=x(e,c),u=x(o,u),u=new E(F(u.x*d.beta),u.y,u.z),r=c.add(u),n=s.add(h)}else{const{p:e,f:f}=this.wNAF(i,t);r=e,n=f}return E.normalizeZ([r,n])[0]}toAffine(e){const{x:t,y:r,z:n}=this,i=this.equals(E.ZERO);null==e&&(e=i?c:$(n));const o=e,a=F(o*o),s=F(a*o),u=F(t*a),d=F(r*s),h=F(n*o);if(i)return P.ZERO;if(h!==f)throw new Error("invZ was invalid");return new P(u,d)}}function x(e,t){const r=t.negate();return e?r:t}E.BASE=new E(s.Gx,s.Gy,f),E.ZERO=new E(i,f,i);const S=new WeakMap;class P{constructor(e,t){this.x=e,this.y=t}_setWindowSize(e){this._WINDOW_SIZE=e,S.delete(this)}hasEvenY(){return this.y%o===i}static fromCompressedHex(e){const t=32===e.length,r=z(t?e:e.subarray(1));if(!J(r))throw new Error("Point is not on curve");const n=p(r);let i=j(n);const o=(i&f)===f;if(t)o&&(i=F(-i));else{const t=1===(1&e[0]);t!==o&&(i=F(-i))}const a=new P(r,i);return a.assertValidity(),a}static fromUncompressedHex(e){const t=z(e.subarray(1,h+1)),r=z(e.subarray(h+1,2*h+1)),n=new P(t,r);return n.assertValidity(),n}static fromHex(e){const t=q(e),r=t.length,n=t[0];if(r===h)return this.fromCompressedHex(t);if(r===y&&(2===n||3===n))return this.fromCompressedHex(t);if(r===w&&4===n)return this.fromUncompressedHex(t);throw new Error(`Point.fromHex: received invalid point. Expected 32-${y} compressed bytes or ${w} uncompressed bytes, not ${r}`)}static fromPrivateKey(e){return P.BASE.multiply(ee(e))}static fromSignature(e,t,r){const{r:n,s:i}=re(t);if(![0,1,2,3].includes(r))throw new Error("Cannot recover: invalid recovery bit");const f=W(q(e)),{n:o}=s,a=2===r||3===r?n+o:n,c=$(a,o),u=F(-f*c,o),d=F(i*c,o),h=1&r?"03":"02",b=P.fromHex(h+T(a)),l=P.BASE.multiplyAndAddUnsafe(b,u,d);if(!l)throw new Error("Cannot recover signature: point at infinify");return l.assertValidity(),l}toRawBytes(e=!1){return N(this.toHex(e))}toHex(e=!1){const t=T(this.x);if(e){const e=this.hasEvenY()?"02":"03";return`${e}${t}`}return`04${t}${T(this.y)}`}toHexX(){return this.toHex(!0).slice(2)}toRawX(){return this.toRawBytes(!0).slice(1)}assertValidity(){const e="Point is not on elliptic curve",{x:t,y:r}=this;if(!J(t)||!J(r))throw new Error(e);const n=F(r*r),f=p(t);if(F(n-f)!==i)throw new Error(e)}equals(e){return this.x===e.x&&this.y===e.y}negate(){return new P(this.x,F(-this.y))}double(){return E.fromAffine(this).double().toAffine()}add(e){return E.fromAffine(this).add(E.fromAffine(e)).toAffine()}subtract(e){return this.add(e.negate())}multiply(e){return E.fromAffine(this).multiply(e,this).toAffine()}multiplyAndAddUnsafe(e,t,r){const n=E.fromAffine(this),o=t===i||t===f||this!==P.BASE?n.multiplyUnsafe(t):n.multiply(t),a=E.fromAffine(e).multiplyUnsafe(r),c=o.add(a);return c.equals(E.ZERO)?void 0:c.toAffine()}}function A(e){return Number.parseInt(e[0],16)>=8?"00"+e:e}function B(e){if(e.length<2||2!==e[0])throw new Error("Invalid signature integer tag: "+_(e));const t=e[1],r=e.subarray(2,t+2);if(!t||r.length!==t)throw new Error("Invalid signature integer: wrong length");if(0===r[0]&&r[1]<=127)throw new Error("Invalid signature integer: trailing length");return{data:z(r),left:e.subarray(t+2)}}function k(e){if(e.length<2||48!=e[0])throw new Error("Invalid signature tag: "+_(e));if(e[1]!==e.length-2)throw new Error("Invalid signature: incorrect length");const{data:t,left:r}=B(e.subarray(2)),{data:n,left:i}=B(r);if(i.length)throw new Error("Invalid signature: left bytes after parsing: "+_(i));return{r:t,s:n}}P.BASE=new P(s.Gx,s.Gy),P.ZERO=new P(i,i);class I{constructor(e,t){this.r=e,this.s=t,this.assertValidity()}static fromCompact(e){const t=e instanceof Uint8Array,r="Signature.fromCompact";if("string"!==typeof e&&!t)throw new TypeError(r+": Expected string or Uint8Array");const n=t?_(e):e;if(128!==n.length)throw new Error(r+": Expected 64-byte hex");return new I(C(n.slice(0,64)),C(n.slice(64,128)))}static fromDER(e){const t=e instanceof Uint8Array;if("string"!==typeof e&&!t)throw new TypeError("Signature.fromDER: Expected string or Uint8Array");const{r:r,s:n}=k(t?e:N(e));return new I(r,n)}static fromHex(e){return this.fromDER(e)}assertValidity(){const{r:e,s:t}=this;if(!Q(e))throw new Error("Invalid Signature: r must be 0 < r < n");if(!Q(t))throw new Error("Invalid Signature: s must be 0 < s < n")}hasHighS(){const e=s.n>>f;return this.s>e}normalizeS(){return this.hasHighS()?new I(this.r,F(-this.s,s.n)):this}toDERRawBytes(){return N(this.toDERHex())}toDERHex(){const e=A(K(this.s)),t=A(K(this.r)),r=e.length/2,n=t.length/2,i=K(r),f=K(n),o=K(n+r+4);return`30${o}02${f}${t}02${i}${e}`}toRawBytes(){return this.toDERRawBytes()}toHex(){return this.toDERHex()}toCompactRawBytes(){return N(this.toCompactHex())}toCompactHex(){return T(this.r)+T(this.s)}}function U(...e){if(!e.every(e=>e instanceof Uint8Array))throw new Error("Uint8Array list expected");if(1===e.length)return e[0];const t=e.reduce((e,t)=>e+t.length,0),r=new Uint8Array(t);for(let n=0,i=0;n<e.length;n++){const t=e[n];r.set(t,i),i+=t.length}return r}const H=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function _(e){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");let t="";for(let r=0;r<e.length;r++)t+=H[e[r]];return t}const R=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");function T(e){if("bigint"!==typeof e)throw new Error("Expected bigint");if(!(i<=e&&e<R))throw new Error("Expected number 0 <= n < 2^256");return e.toString(16).padStart(64,"0")}function O(e){const t=N(T(e));if(32!==t.length)throw new Error("Error: expected 32 bytes");return t}function K(e){const t=e.toString(16);return 1&t.length?"0"+t:t}function C(e){if("string"!==typeof e)throw new TypeError("hexToNumber: expected string, got "+typeof e);return BigInt("0x"+e)}function N(e){if("string"!==typeof e)throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex"+e.length);const t=new Uint8Array(e.length/2);for(let r=0;r<t.length;r++){const n=2*r,i=e.slice(n,n+2),f=Number.parseInt(i,16);if(Number.isNaN(f)||f<0)throw new Error("Invalid byte sequence");t[r]=f}return t}function z(e){return C(_(e))}function q(e){return e instanceof Uint8Array?Uint8Array.from(e):N(e)}function D(e){if("number"===typeof e&&Number.isSafeInteger(e)&&e>0)return BigInt(e);if("bigint"===typeof e&&Q(e))return e;throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")}function F(e,t=s.P){const r=e%t;return r>=i?r:t+r}function V(e,t){const{P:r}=s;let n=e;while(t-- >i)n*=n,n%=r;return n}function j(e){const{P:t}=s,r=BigInt(6),n=BigInt(11),i=BigInt(22),f=BigInt(23),c=BigInt(44),u=BigInt(88),d=e*e*e%t,h=d*d*e%t,b=V(h,a)*h%t,l=V(b,a)*h%t,y=V(l,o)*d%t,w=V(y,n)*y%t,p=V(w,i)*w%t,g=V(p,c)*p%t,m=V(g,u)*g%t,v=V(m,c)*p%t,E=V(v,a)*h%t,x=V(E,f)*w%t,S=V(x,r)*d%t,P=V(S,o),A=P*P%t;if(A!==e)throw new Error("Cannot find square root");return P}function $(e,t=s.P){if(e===i||t<=i)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let r=F(e,t),n=t,o=i,a=f,c=f,u=i;while(r!==i){const e=n/r,t=n%r,i=o-c*e,f=a-u*e;n=r,r=t,o=c,a=u,c=i,u=f}const d=n;if(d!==f)throw new Error("invert: does not exist");return F(o,t)}function Z(e,t=s.P){const r=new Array(e.length),n=e.reduce((e,n,f)=>n===i?e:(r[f]=e,F(e*n,t)),f),o=$(n,t);return e.reduceRight((e,n,f)=>n===i?e:(r[f]=F(e*r[f],t),F(e*n,t)),o),r}function M(e){const t=8*e.length-8*b,r=z(e);return t>0?r>>BigInt(t):r}function W(e,t=!1){const r=M(e);if(t)return r;const{n:n}=s;return r>=n?r-n:r}let L,X;class G{constructor(e,t){if(this.hashLen=e,this.qByteLen=t,"number"!==typeof e||e<2)throw new Error("hashLen must be a number");if("number"!==typeof t||t<2)throw new Error("qByteLen must be a number");this.v=new Uint8Array(e).fill(1),this.k=new Uint8Array(e).fill(0),this.counter=0}hmac(...e){return He.hmacSha256(this.k,...e)}hmacSync(...e){return X(this.k,...e)}checkSync(){if("function"!==typeof X)throw new m("hmacSha256Sync needs to be set")}incr(){if(this.counter>=1e3)throw new Error("Tried 1,000 k values for sign(), all were invalid");this.counter+=1}async reseed(e=new Uint8Array){this.k=await this.hmac(this.v,Uint8Array.from([0]),e),this.v=await this.hmac(this.v),0!==e.length&&(this.k=await this.hmac(this.v,Uint8Array.from([1]),e),this.v=await this.hmac(this.v))}reseedSync(e=new Uint8Array){this.checkSync(),this.k=this.hmacSync(this.v,Uint8Array.from([0]),e),this.v=this.hmacSync(this.v),0!==e.length&&(this.k=this.hmacSync(this.v,Uint8Array.from([1]),e),this.v=this.hmacSync(this.v))}async generate(){this.incr();let e=0;const t=[];while(e<this.qByteLen){this.v=await this.hmac(this.v);const r=this.v.slice();t.push(r),e+=this.v.length}return U(...t)}generateSync(){this.checkSync(),this.incr();let e=0;const t=[];while(e<this.qByteLen){this.v=this.hmacSync(this.v);const r=this.v.slice();t.push(r),e+=this.v.length}return U(...t)}}function Q(e){return i<e&&e<s.n}function J(e){return i<e&&e<s.P}function Y(e,t,r,n=!0){const{n:o}=s,a=W(e,!0);if(!Q(a))return;const c=$(a,o),u=P.BASE.multiply(a),d=F(u.x,o);if(d===i)return;const h=F(c*F(t+r*d,o),o);if(h===i)return;let b=new I(d,h),l=(u.x===b.r?0:2)|Number(u.y&f);return n&&b.hasHighS()&&(b=b.normalizeS(),l^=1),{sig:b,recovery:l}}function ee(e){let t;if("bigint"===typeof e)t=e;else if("number"===typeof e&&Number.isSafeInteger(e)&&e>0)t=BigInt(e);else if("string"===typeof e){if(e.length!==2*b)throw new Error("Expected 32 bytes of private key");t=C(e)}else{if(!(e instanceof Uint8Array))throw new TypeError("Expected valid private key");if(e.length!==b)throw new Error("Expected 32 bytes of private key");t=z(e)}if(!Q(t))throw new Error("Expected private key: 0 < key < n");return t}function te(e){return e instanceof P?(e.assertValidity(),e):P.fromHex(e)}function re(e){if(e instanceof I)return e.assertValidity(),e;try{return I.fromDER(e)}catch(t){return I.fromCompact(e)}}function ne(e,t=!1){return P.fromPrivateKey(e).toRawBytes(t)}function ie(e,t,r,n=!1){return P.fromSignature(e,t,r).toRawBytes(n)}function fe(e){const t=e instanceof Uint8Array,r="string"===typeof e,n=(t||r)&&e.length;return t?n===y||n===w:r?n===2*y||n===2*w:e instanceof P}function oe(e,t,r=!1){if(fe(e))throw new TypeError("getSharedSecret: first arg must be private key");if(!fe(t))throw new TypeError("getSharedSecret: second arg must be public key");const n=te(t);return n.assertValidity(),n.multiply(ee(e)).toRawBytes(r)}function ae(e){const t=e.length>h?e.slice(0,h):e;return z(t)}function ce(e){const t=ae(e),r=F(t,s.n);return se(r<i?t:r)}function se(e){return O(e)}function ue(e,t,r){if(null==e)throw new Error(`sign: expected valid message hash, not "${e}"`);const n=q(e),i=ee(t),f=[se(i),ce(n)];if(null!=r){!0===r&&(r=He.randomBytes(h));const e=q(r);if(e.length!==h)throw new Error(`sign: Expected ${h} bytes of extra data`);f.push(e)}const o=U(...f),a=ae(n);return{seed:o,m:a,d:i}}function de(e,t){const{sig:r,recovery:n}=e,{der:i,recovered:f}=Object.assign({canonical:!0,der:!0},t),o=i?r.toDERRawBytes():r.toCompactRawBytes();return f?[o,n]:o}async function he(e,t,r={}){const{seed:n,m:i,d:f}=ue(e,t,r.extraEntropy),o=new G(l,b);let a;await o.reseed(n);while(!(a=Y(await o.generate(),i,f,r.canonical)))await o.reseed();return de(a,r)}function be(e,t,r={}){const{seed:n,m:i,d:f}=ue(e,t,r.extraEntropy),o=new G(l,b);let a;o.reseedSync(n);while(!(a=Y(o.generateSync(),i,f,r.canonical)))o.reseedSync();return de(a,r)}const le={strict:!0};function ye(e,t,r,n=le){let i;try{i=re(e),t=q(t)}catch(w){return!1}const{r:f,s:o}=i;if(n.strict&&i.hasHighS())return!1;const a=W(t);let c;try{c=te(r)}catch(w){return!1}const{n:u}=s,d=$(o,u),h=F(a*d,u),b=F(f*d,u),l=P.BASE.multiplyAndAddUnsafe(c,h,b);if(!l)return!1;const y=F(l.x,u);return y===f}function we(e){return F(z(e),s.n)}class pe{constructor(e,t){this.r=e,this.s=t,this.assertValidity()}static fromHex(e){const t=q(e);if(64!==t.length)throw new TypeError("SchnorrSignature.fromHex: expected 64 bytes, not "+t.length);const r=z(t.subarray(0,32)),n=z(t.subarray(32,64));return new pe(r,n)}assertValidity(){const{r:e,s:t}=this;if(!J(e)||!Q(t))throw new Error("Invalid signature")}toHex(){return T(this.r)+T(this.s)}toRawBytes(){return N(this.toHex())}}function ge(e){return P.fromPrivateKey(e).toRawX()}class me{constructor(e,t,r=He.randomBytes()){if(null==e)throw new TypeError(`sign: Expected valid message, not "${e}"`);this.m=q(e);const{x:n,scalar:i}=this.getScalar(ee(t));if(this.px=n,this.d=i,this.rand=q(r),32!==this.rand.length)throw new TypeError("sign: Expected 32 bytes of aux randomness")}getScalar(e){const t=P.fromPrivateKey(e),r=t.hasEvenY()?e:s.n-e;return{point:t,scalar:r,x:t.toRawX()}}initNonce(e,t){return O(e^z(t))}finalizeNonce(e){const t=F(z(e),s.n);if(t===i)throw new Error("sign: Creation of signature failed. k is zero");const{point:r,x:n,scalar:f}=this.getScalar(t);return{R:r,rx:n,k:f}}finalizeSig(e,t,r,n){return new pe(e.x,F(t+r*n,s.n)).toRawBytes()}error(){throw new Error("sign: Invalid signature produced")}async calc(){const{m:e,d:t,px:r,rand:n}=this,i=He.taggedHash,f=this.initNonce(t,await i(Ie.aux,n)),{R:o,rx:a,k:c}=this.finalizeNonce(await i(Ie.nonce,f,r,e)),s=we(await i(Ie.challenge,a,r,e)),u=this.finalizeSig(o,c,s,t);return await Pe(u,e,r)||this.error(),u}calcSync(){const{m:e,d:t,px:r,rand:n}=this,i=He.taggedHashSync,f=this.initNonce(t,i(Ie.aux,n)),{R:o,rx:a,k:c}=this.finalizeNonce(i(Ie.nonce,f,r,e)),s=we(i(Ie.challenge,a,r,e)),u=this.finalizeSig(o,c,s,t);return Ae(u,e,r)||this.error(),u}}async function ve(e,t,r){return new me(e,t,r).calc()}function Ee(e,t,r){return new me(e,t,r).calcSync()}function xe(e,t,r){const n=e instanceof pe,i=n?e:pe.fromHex(e);return n&&i.assertValidity(),{...i,m:q(t),P:te(r)}}function Se(e,t,r,n){const i=P.BASE.multiplyAndAddUnsafe(t,ee(r),F(-n,s.n));return!(!i||!i.hasEvenY()||i.x!==e)}async function Pe(e,t,r){try{const{r:n,s:i,m:f,P:o}=xe(e,t,r),a=we(await He.taggedHash(Ie.challenge,O(n),o.toRawX(),f));return Se(n,o,i,a)}catch(n){return!1}}function Ae(e,t,r){try{const{r:n,s:i,m:f,P:o}=xe(e,t,r),a=we(He.taggedHashSync(Ie.challenge,O(n),o.toRawX(),f));return Se(n,o,i,a)}catch(n){if(n instanceof m)throw n;return!1}}const Be={Signature:pe,getPublicKey:ge,sign:ve,verify:Pe,signSync:Ee,verifySync:Ae};P.BASE._setWindowSize(8);const ke={node:n,web:"object"===typeof self&&"crypto"in self?self.crypto:void 0},Ie={challenge:"BIP0340/challenge",aux:"BIP0340/aux",nonce:"BIP0340/nonce"},Ue={},He={bytesToHex:_,hexToBytes:N,concatBytes:U,mod:F,invert:$,isValidPrivateKey(e){try{return ee(e),!0}catch(t){return!1}},_bigintTo32Bytes:O,_normalizePrivateKey:ee,hashToPrivateKey:e=>{e=q(e);const t=b+8;if(e.length<t||e.length>1024)throw new Error("Expected valid bytes of private key as per FIPS 186");const r=F(z(e),s.n-f)+f;return O(r)},randomBytes:(e=32)=>{if(ke.web)return ke.web.getRandomValues(new Uint8Array(e));if(ke.node){const{randomBytes:t}=ke.node;return Uint8Array.from(t(e))}throw new Error("The environment doesn't have randomBytes function")},randomPrivateKey:()=>He.hashToPrivateKey(He.randomBytes(b+8)),precompute(e=8,t=P.BASE){const r=t===P.BASE?t:new P(t.x,t.y);return r._setWindowSize(e),r.multiply(a),r},sha256:async(...e)=>{if(ke.web){const t=await ke.web.subtle.digest("SHA-256",U(...e));return new Uint8Array(t)}if(ke.node){const{createHash:t}=ke.node,r=t("sha256");return e.forEach(e=>r.update(e)),Uint8Array.from(r.digest())}throw new Error("The environment doesn't have sha256 function")},hmacSha256:async(e,...t)=>{if(ke.web){const r=await ke.web.subtle.importKey("raw",e,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),n=U(...t),i=await ke.web.subtle.sign("HMAC",r,n);return new Uint8Array(i)}if(ke.node){const{createHmac:r}=ke.node,n=r("sha256",e);return t.forEach(e=>n.update(e)),Uint8Array.from(n.digest())}throw new Error("The environment doesn't have hmac-sha256 function")},sha256Sync:void 0,hmacSha256Sync:void 0,taggedHash:async(e,...t)=>{let r=Ue[e];if(void 0===r){const t=await He.sha256(Uint8Array.from(e,e=>e.charCodeAt(0)));r=U(t,t),Ue[e]=r}return He.sha256(r,...t)},taggedHashSync:(e,...t)=>{if("function"!==typeof L)throw new m("sha256Sync is undefined, you need to set it");let r=Ue[e];if(void 0===r){const t=L(Uint8Array.from(e,e=>e.charCodeAt(0)));r=U(t,t),Ue[e]=r}return L(r,...t)},_JacobianPoint:E};Object.defineProperties(He,{sha256Sync:{configurable:!1,get(){return L},set(e){L||(L=e)}},hmacSha256Sync:{configurable:!1,get(){return X},set(e){X||(X=e)}}})},"256e":function(e,t,r){"use strict";(function(e){r("d9e2"),Object.defineProperty(t,"__esModule",{value:!0}),t.testEcc=void 0;var n=function(t){return e.from(t,"hex")};function i(t){f(t.isPoint(n("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))),f(!t.isPoint(n("030000000000000000000000000000000000000000000000000000000000000005"))),f(t.isPrivate(n("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))),f(t.isPrivate(n("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"))),f(!t.isPrivate(n("0000000000000000000000000000000000000000000000000000000000000000"))),f(!t.isPrivate(n("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"))),f(!t.isPrivate(n("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364142"))),f(e.from(t.privateAdd(n("0000000000000000000000000000000000000000000000000000000000000001"),n("0000000000000000000000000000000000000000000000000000000000000000"))).equals(n("0000000000000000000000000000000000000000000000000000000000000001"))),f(null===t.privateAdd(n("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036413e"),n("0000000000000000000000000000000000000000000000000000000000000003"))),f(e.from(t.privateAdd(n("e211078564db65c3ce7704f08262b1f38f1ef412ad15b5ac2d76657a63b2c500"),n("b51fbb69051255d1becbd683de5848242a89c229348dd72896a87ada94ae8665"))).equals(n("9730c2ee69edbb958d42db7460bafa18fef9d955325aec99044c81c8282b0a24"))),f(e.from(t.privateNegate(n("0000000000000000000000000000000000000000000000000000000000000001"))).equals(n("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"))),f(e.from(t.privateNegate(n("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036413e"))).equals(n("0000000000000000000000000000000000000000000000000000000000000003"))),f(e.from(t.privateNegate(n("b1121e4088a66a28f5b6b0f5844943ecd9f610196d7bb83b25214b60452c09af"))).equals(n("4eede1bf775995d70a494f0a7bb6bc11e0b8cccd41cce8009ab1132c8b0a3792"))),f(e.from(t.pointCompress(n("0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"),!0)).equals(n("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))),f(e.from(t.pointCompress(n("0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"),!1)).equals(n("0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"))),f(e.from(t.pointCompress(n("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),!0)).equals(n("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"))),f(e.from(t.pointCompress(n("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),!1)).equals(n("0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"))),f(e.from(t.pointFromScalar(n("b1121e4088a66a28f5b6b0f5844943ecd9f610196d7bb83b25214b60452c09af"))).equals(n("02b07ba9dca9523b7ef4bd97703d43d20399eb698e194704791a25ce77a400df99"))),f(null===t.xOnlyPointAddTweak(n("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),n("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140")));var r=t.xOnlyPointAddTweak(n("1617d38ed8d8657da4d4761e8057bc396ea9e4b9d29776d4be096016dbd2509b"),n("a8397a935f0dfceba6ba9618f6451ef4d80637abf4e6af2669fbc9de6a8fd2ac"));f(e.from(r.xOnlyPubkey).equals(n("e478f99dab91052ab39a33ea35fd5e6e4933f4d28023cd597c9a1f6760346adf"))&&1===r.parity),r=t.xOnlyPointAddTweak(n("2c0b7cf95324a07d05398b240174dc0c2be444d96b159aa6c7f7b1e668680991"),n("823c3cd2142744b075a87eade7e1b8678ba308d566226a0056ca2b7a76f86b47")),f(e.from(r.xOnlyPubkey).equals(n("9534f8dc8c6deda2dc007655981c78b49c5d96c778fbf363462a11ec9dfd948c"))&&0===r.parity),f(e.from(t.sign(n("5e9f0a0d593efdcf78ac923bc3313e4e7d408d574354ee2b3288c0da9fbba6ed"),n("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"))).equals(n("54c4a33c6423d689378f160a7ff8b61330444abb58fb470f96ea16d99d4a2fed07082304410efa6b2943111b6a4e0aaa7b7db55a07e9861d1fb3cb1f421044a5"))),f(t.verify(n("5e9f0a0d593efdcf78ac923bc3313e4e7d408d574354ee2b3288c0da9fbba6ed"),n("0379be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),n("54c4a33c6423d689378f160a7ff8b61330444abb58fb470f96ea16d99d4a2fed07082304410efa6b2943111b6a4e0aaa7b7db55a07e9861d1fb3cb1f421044a5"))),t.signSchnorr&&f(e.from(t.signSchnorr(n("7e2d58d8b3bcdf1abadec7829054f90dda9805aab56c77333024b9d0a508b75c"),n("c90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b14e5c9"),n("c87aa53824b4d7ae2eb035a2b5bbbccc080e76cdc6d1692c4b0b62d798e6d906"))).equals(n("5831aaeed7b44bb74e5eab94ba9d4294c49bcf2a60728d8b4c200f50dd313c1bab745879a5ad954a72c45a91c3a51d3c7adea98d82f8481e0e1e03674a6f3fb7"))),t.verifySchnorr&&f(t.verifySchnorr(n("7e2d58d8b3bcdf1abadec7829054f90dda9805aab56c77333024b9d0a508b75c"),n("dd308afec5777e13121fa72b9cc1b7cc0139715309b086c960e18fd969774eb8"),n("5831aaeed7b44bb74e5eab94ba9d4294c49bcf2a60728d8b4c200f50dd313c1bab745879a5ad954a72c45a91c3a51d3c7adea98d82f8481e0e1e03674a6f3fb7")))}function f(e){if(!e)throw new Error("ecc library invalid")}t.testEcc=i}).call(this,r("1c35").Buffer)},"262f":function(e,t,r){"use strict";(function(e){var n=r("1f71"),i=r("e632"),f=r("d129");function o(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var a=o(n);a.utils.hmacSha256Sync=(e,...t)=>i.hmac(f.sha256,e,a.utils.concatBytes(...t)),a.utils.sha256Sync=(...e)=>f.sha256(a.utils.concatBytes(...e));const c=a.utils._normalizePrivateKey,s=32,u=32,d=new Uint8Array([255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,186,174,220,230,175,72,160,59,191,210,94,140,208,54,65,65]),h=32;function b(e,t){for(let r=0;r<32;++r)if(e[r]!==t[r])return e[r]<t[r]?-1:1;return 0}function l(e){return e instanceof Uint8Array&&e.length===u&&!(b(e,d)>=0)}function y(e){return e instanceof Uint8Array&&64===e.length&&b(e.subarray(0,32),d)<0&&b(e.subarray(32,64),d)<0}function w(e){return e instanceof Uint8Array&&e.length===s}function p(e){return void 0===e||e instanceof Uint8Array&&e.length===h}function g(e){if("string"!==typeof e)throw new TypeError("hexToNumber: expected string, got "+typeof e);return BigInt("0x"+e)}function m(e){return g(a.utils.bytesToHex(e))}function v(e){let t;if("bigint"===typeof e)t=e;else if("number"===typeof e&&Number.isSafeInteger(e)&&e>=0)t=BigInt(e);else if("string"===typeof e){if(64!==e.length)throw new Error("Expected 32 bytes of private scalar");t=g(e)}else{if(!(e instanceof Uint8Array))throw new TypeError("Expected valid private scalar");if(32!==e.length)throw new Error("Expected 32 bytes of private scalar");t=m(e)}if(t<0)throw new Error("Expected private scalar >= 0");return t}const E=(e,t)=>{const r=c(e),n=v(t),i=a.utils._bigintTo32Bytes(a.utils.mod(r+n,a.CURVE.n));return a.utils.isValidPrivateKey(i)?i:null},x=(e,t)=>{const r=c(e),n=v(t),i=a.utils._bigintTo32Bytes(a.utils.mod(r-n,a.CURVE.n));return a.utils.isValidPrivateKey(i)?i:null},S=e=>{const t=c(e),r=a.utils._bigintTo32Bytes(a.CURVE.n-t);return a.utils.isValidPrivateKey(r)?r:null},P=(e,t,r)=>{const n=a.Point.fromHex(e),i=v(t),f=a.Point.BASE.multiplyAndAddUnsafe(n,i,1n);if(!f)throw new Error("Tweaked point at infinity");return f.toRawBytes(r)},A=(e,t,r)=>{const n=a.Point.fromHex(e),i="string"===typeof t?t:a.utils.bytesToHex(t),f=BigInt("0x"+i);return n.multiply(f).toRawBytes(r)};function B(e,t){return void 0===e?void 0===t||H(t):!!e}function k(e){try{return e()}catch(t){return null}}function I(e,t){if(32===e.length!==t)return!1;try{return!!a.Point.fromHex(e)}catch(r){return!1}}function U(e){return I(e,!1)}function H(e){const t=33;return I(e,!1)&&e.length===t}function _(e){return a.utils.isValidPrivateKey(e)}function R(e){return I(e,!0)}function T(e,t){if(!R(e))throw new Error("Expected Point");if(!l(t))throw new Error("Expected Tweak");return k(()=>{const r=P(e,t,!0),n=r[0]%2===1?1:0;return{parity:n,xOnlyPubkey:r.slice(1)}})}function O(e){if(!U(e))throw new Error("Expected Point");return e.slice(1,33)}function K(e,t){if(!_(e))throw new Error("Expected Private");return k(()=>a.getPublicKey(e,B(t)))}function C(e){if(!_(e))throw new Error("Expected Private");return O(K(e))}function N(e,t){if(!U(e))throw new Error("Expected Point");return a.Point.fromHex(e).toRawBytes(B(t,e))}function z(e,t,r){if(!U(e))throw new Error("Expected Point");if(!l(t))throw new Error("Expected Tweak");return k(()=>A(e,t,B(r,e)))}function q(e,t,r){if(!U(e)||!U(t))throw new Error("Expected Point");return k(()=>{const n=a.Point.fromHex(e),i=a.Point.fromHex(t);return n.equals(i.negate())?null:n.add(i).toRawBytes(B(r,e))})}function D(e,t,r){if(!U(e))throw new Error("Expected Point");if(!l(t))throw new Error("Expected Tweak");return k(()=>P(e,t,B(r,e)))}function F(e,t){if(!1===_(e))throw new Error("Expected Private");if(!1===l(t))throw new Error("Expected Tweak");return k(()=>E(e,t))}function V(e,t){if(!1===_(e))throw new Error("Expected Private");if(!1===l(t))throw new Error("Expected Tweak");return k(()=>x(e,t))}function j(e){if(!1===_(e))throw new Error("Expected Private");return S(e)}function $(e,t,r){if(!_(t))throw new Error("Expected Private");if(!w(e))throw new Error("Expected Scalar");if(!p(r))throw new Error("Expected Extra Data (32 bytes)");return a.signSync(e,t,{der:!1,extraEntropy:r})}function Z(t,r,n=e.alloc(32,0)){if(!_(r))throw new Error("Expected Private");if(!w(t))throw new Error("Expected Scalar");if(!p(n))throw new Error("Expected Extra Data (32 bytes)");return a.schnorr.signSync(t,r,n)}function M(e,t,r,n){if(!U(t))throw new Error("Expected Point");if(!y(r))throw new Error("Expected Signature");if(!w(e))throw new Error("Expected Scalar");return a.verify(r,e,t,{strict:n})}function W(e,t,r){if(!R(t))throw new Error("Expected Point");if(!y(r))throw new Error("Expected Signature");if(!w(e))throw new Error("Expected Scalar");return a.schnorr.verifySync(r,e,t)}t.isPoint=U,t.isPointCompressed=H,t.isPrivate=_,t.isXOnlyPoint=R,t.pointAdd=q,t.pointAddScalar=D,t.pointCompress=N,t.pointFromScalar=K,t.pointMultiply=z,t.privateAdd=F,t.privateNegate=j,t.privateSub=V,t.sign=$,t.signSchnorr=Z,t.verify=M,t.verifySchnorr=W,t.xOnlyPointAddTweak=T,t.xOnlyPointFromPoint=O,t.xOnlyPointFromScalar=C}).call(this,r("1c35").Buffer)},"42cf":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.maybe=t.Boolean=t.Array=t.Buffer256bit=t.Network=t.typeforce=void 0,t.typeforce=r("77ec"),t.Network=t.typeforce.compile({messagePrefix:t.typeforce.oneOf(t.typeforce.Buffer,t.typeforce.String),bip32:{public:t.typeforce.UInt32,private:t.typeforce.UInt32},pubKeyHash:t.typeforce.UInt8,scriptHash:t.typeforce.UInt8,wif:t.typeforce.UInt8}),t.Buffer256bit=t.typeforce.BufferN(32),t.Array=t.typeforce.Array,t.Boolean=t.typeforce.Boolean,t.maybe=t.typeforce.maybe},"530c":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.testnet=t.bitcoin=void 0,t.bitcoin={messagePrefix:"Bitcoin Signed Message:\n",bech32:"bc",bip32:{public:76067358,private:76066276},pubKeyHash:0,scriptHash:5,wif:128},t.testnet={messagePrefix:"Bitcoin Signed Message:\n",bech32:"tb",bip32:{public:70617039,private:70615956},pubKeyHash:111,scriptHash:196,wif:239}},a173:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.networks=t.ECPairFactory=t.default=void 0;var n=r("a79a");Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.ECPairFactory}}),Object.defineProperty(t,"ECPairFactory",{enumerable:!0,get:function(){return n.ECPairFactory}}),Object.defineProperty(t,"networks",{enumerable:!0,get:function(){return n.networks}})},a79a:function(e,t,r){"use strict";(function(e){var n=r("970b").default,i=r("5bc3").default,f=r("9523").default;r("fb6a"),r("d9e2"),r("4de4"),r("d3b7"),r("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.ECPairFactory=t.networks=void 0;var o=r("530c");t.networks=o;var a=r("42cf"),c=r("11dc"),s=r("a50f"),u=r("256e"),d=a.typeforce.maybe(a.typeforce.compile({compressed:a.maybe(a.Boolean),network:a.maybe(a.Network)})),h=function(e){return 32===e.length?e:e.slice(1,33)};function b(t){function r(e){return t.isPoint(e)}function b(e,r){if(a.typeforce(a.Buffer256bit,e),!t.isPrivate(e))throw new TypeError("Private key not in range [1, n)");return a.typeforce(d,r),new p(e,void 0,r)}function l(e,r){return a.typeforce(t.isPoint,e),a.typeforce(d,r),new p(void 0,e,r)}function y(e,t){var r=s.decode(e),n=r.version;if(a.Array(t)){if(t=t.filter((function(e){return n===e.wif})).pop(),!t)throw new Error("Unknown network version")}else if(t=t||o.bitcoin,n!==t.wif)throw new Error("Invalid network version");return b(r.privateKey,{compressed:r.compressed,network:t})}function w(e){a.typeforce(d,e),void 0===e&&(e={});var r,n=e.rng||c;do{r=n(32),a.typeforce(a.Buffer256bit,r)}while(!t.isPrivate(r));return b(r,e)}(0,u.testEcc)(t);var p=function(){function r(i,a,c){n(this,r),f(this,"__D",void 0),f(this,"__Q",void 0),f(this,"compressed",void 0),f(this,"network",void 0),f(this,"lowR",void 0),this.__D=i,this.__Q=a,this.lowR=!1,void 0===c&&(c={}),this.compressed=void 0===c.compressed||c.compressed,this.network=c.network||o.bitcoin,void 0!==a&&(this.__Q=e.from(t.pointCompress(a,this.compressed)))}return i(r,[{key:"privateKey",get:function(){return this.__D}},{key:"publicKey",get:function(){if(!this.__Q){var r=t.pointFromScalar(this.__D,this.compressed);this.__Q=e.from(r)}return this.__Q}},{key:"toWIF",value:function(){if(!this.__D)throw new Error("Missing private key");return s.encode(this.network.wif,this.__D,this.compressed)}},{key:"tweak",value:function(e){return this.privateKey?this.tweakFromPrivateKey(e):this.tweakFromPublicKey(e)}},{key:"sign",value:function(r,n){if(!this.__D)throw new Error("Missing private key");if(void 0===n&&(n=this.lowR),!1===n)return e.from(t.sign(r,this.__D));var i=t.sign(r,this.__D),f=e.alloc(32,0),o=0;while(i[0]>127)o++,f.writeUIntLE(o,0,6),i=t.sign(r,this.__D,f);return e.from(i)}},{key:"signSchnorr",value:function(r){if(!this.privateKey)throw new Error("Missing private key");if(!t.signSchnorr)throw new Error("signSchnorr not supported by ecc library");return e.from(t.signSchnorr(r,this.privateKey))}},{key:"verify",value:function(e,r){return t.verify(e,this.publicKey,r)}},{key:"verifySchnorr",value:function(e,r){if(!t.verifySchnorr)throw new Error("verifySchnorr not supported by ecc library");return t.verifySchnorr(e,this.publicKey.subarray(1,33),r)}},{key:"tweakFromPublicKey",value:function(r){var n=h(this.publicKey),i=t.xOnlyPointAddTweak(n,r);if(!i||null===i.xOnlyPubkey)throw new Error("Cannot tweak public key!");var f=e.from([0===i.parity?2:3]);return l(e.concat([f,i.xOnlyPubkey]),{network:this.network,compressed:this.compressed})}},{key:"tweakFromPrivateKey",value:function(r){var n=3===this.publicKey[0]||4===this.publicKey[0]&&1===(1&this.publicKey[64]),i=n?t.privateNegate(this.privateKey):this.privateKey,f=t.privateAdd(i,r);if(!f)throw new Error("Invalid tweaked private key!");return b(e.from(f),{network:this.network,compressed:this.compressed})}}]),r}();return{isPoint:r,fromPrivateKey:b,fromPublicKey:l,fromWIF:y,makeRandom:w}}t.ECPairFactory=b}).call(this,r("1c35").Buffer)}}]);