const o="feedback-form-state",r=document.querySelector(".feedback-form");r.addEventListener("input",n);r.addEventListener("submit",s);let e=JSON.parse(localStorage.getItem(o))||{};const{email:t,message:a}=r.elements;m();function n(l){e={email:t.value,message:a.value},localStorage.setItem(o,JSON.stringify(e))}function m(){e&&(t.value=e.email||"",a.value=e.message||"")}function s(l){if(l.preventDefault(),console.log({email:t.value.trim(),message:a.value.trim()}),t.value===""||a.value==="")return alert("Please fill in all the fields!");localStorage.removeItem(o),l.currentTarget.reset(),e={}}
//# sourceMappingURL=2-form-ab05fd8b.js.map
