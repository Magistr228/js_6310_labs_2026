export const DEFAULT_CATEGORIES = [
  'продукты',
  'транспорт',
  'развлечения',
  'жильё',
  'здоровье',
  'прочее'
];

const sessions = new Map();

const createSession = () => ({
  state: 'IDLE',
  pendingAmount: null,
  categories: [...DEFAULT_CATEGORIES],
  expenses: []
});

export const getSession = (chatId) => {
  if (!sessions.has(chatId)) {
    sessions.set(chatId, createSession());
  }
  return sessions.get(chatId);
};

export const addExpense = (session, amount, category, date = new Date()) => {
  session.expenses.push({ amount, category, date });
};

export const addCategory = (session, category) => {
  const normalized = category.trim().toLowerCase();
  if (session.categories.includes(normalized)) {
    return false;
  }
  session.categories.push(normalized);
  return true;
};

export const getCurrentMonthExpenses = (session, date = new Date()) => session.expenses.filter((expense) =>
  expense.date.getFullYear() === date.getFullYear() && expense.date.getMonth() === date.getMonth()
);

export const clearSessions = () => sessions.clear();
