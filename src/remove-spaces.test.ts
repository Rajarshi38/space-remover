import removeSpaces from "./utils/spaceRemover";
const s2 = "  ";
const s4 = "    ";
const text = `${s4}<div>${s4}
${s4}${s2}<p></p>${s4}
${s4}</div>${s4}`;

it("removes leading spaces without preserving indent", () => {
  const expectation = `<div>${s4}
  <p></p>${s4}
  </div>${s4}`;

  const result = removeSpaces({
    text,
    leading: true,
    trailing: false,
    preserveIndent: false,
  });
  expect(result).toBe(expectation);
});

it("removes leading spaces and preserve indent", () => {
  const expectation = `${s4}<div>
  ${s4}${s2}<p></p>
  ${s4}</div>`;
  const result = removeSpaces({
    text,
    leading: true,
    trailing: false,
    preserveIndent: true,
  });
  expect(result).toBe(expectation);
});

it("remove trailing spaces", () => {
  const expectation = `${s4}<div>
  ${s4}${s2}<p></p>
  ${s4}</div>`;

  const result = removeSpaces({
    text,
    leading: false,
    trailing: true,
    preserveIndent: false,
  });

  expect(result).toBe(expectation);
});

it("remove leading and trailing spaces", () => {
  const expectation = `<div>
  <p></p>
  </div>`;

  const result = removeSpaces({
    text,
    leading: true,
    trailing: true,
    preserveIndent: false,
  });

  expect(result).toBe(expectation);
});
