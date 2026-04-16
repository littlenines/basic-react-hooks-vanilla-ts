import useState from "../utils/useState";
import useEffect from "../utils/useEffect";
import useMemo from "../utils/useMemo";
import useRef from "../utils/useRef";

const [_, setText, renderText] = useState("");

const [getEffectText, setEffectText, renderEffectText] = useState("");

const [getNumber, setNumber, renderNumber] = useState(0);

const refTest = useRef<HTMLInputElement | null>(null);

const input = document.querySelector<HTMLInputElement>(`#myInput`);
const myText = document.querySelector<HTMLSpanElement>("#myText")!;

const effectInput = document.querySelector<HTMLInputElement>(`#myEffectInput`);
const myEffectText = document.querySelector<HTMLParagraphElement>(`#myEffectText`)!;
const charCount = document.querySelector<HTMLParagraphElement>(`#charCount`)!;

const myMemoInput = document.querySelector<HTMLInputElement>(`#myMemoInput`)!;
const memoFactorial = document.querySelector<HTMLSpanElement>(`#memoFactorial`)!;

const focusedInput = document.querySelector<HTMLInputElement>(`#focusedInput`)!;

refTest.current = focusedInput;

refTest.current?.focus();

const check = useEffect(() => {
  charCount.textContent = `${getEffectText().length} / 50`;

  return () => {
    charCount.textContent = "0 / 50";
  };
}, [getEffectText]);

const factorial = useMemo(() => {
  const n = getNumber();
  if (isNaN(n) || n < 0) return 0;
  let result = 1;
  for (let i = 1; i <= n; i++) result *= i;
  return result;
}, [getNumber]);

renderText((val) => {
  myText.textContent = val;
});

renderEffectText((val) => {
  myEffectText.textContent = val;
});

renderNumber(() => {
  memoFactorial.textContent = getNumber() === 0 ? "" : `${getNumber()}! = ${factorial()}`;
});

input?.addEventListener("input", (e) => {
  setText((e.target as HTMLInputElement).value);
});

effectInput?.addEventListener("input", (e) => {
  setEffectText((e.target as HTMLInputElement).value);
  check();
});

myMemoInput.addEventListener("input", (e) => {
  setNumber(Number((e.target as HTMLInputElement).value));
});
