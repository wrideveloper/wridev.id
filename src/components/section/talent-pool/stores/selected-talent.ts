import { writable } from 'svelte/store';
import type { Talent } from '~/models/talent';

export const selectedTalent = writable<Talent | null>(null);