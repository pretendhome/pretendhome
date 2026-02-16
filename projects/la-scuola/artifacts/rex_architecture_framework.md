# LA SCUOLA STRUCTURAL COHERENCE FRAMEWORK
## Rex Architecture Design v1.0

**Agent**: Tyrannosaurus (Rex) v1.0  
**Data**: 2026-02-15  
**Input**: Convergenza + Argy Research  
**Status**: ARCHITECTURE PROPOSAL (requires validation)

---

## 🚨 ONE-WAY DOOR DECISIONS

Queste decisioni sono difficili da invertire. Richiedono approvazione esplicita.

### ONE-WAY DOOR 1: Definire "Guaranteed Curriculum"

**Decisione**: Ogni grado definisce "minimo garantito" che OGNI studente deve padroneggiare entro fine anno.

**Perché è one-way door**:
- Una volta definito, diventa aspettativa istituzionale
- Insegnanti saranno valutati su questo
- Famiglie lo conosceranno
- Difficile tornare indietro senza perdere credibilità

**Tradeoff**:
- ✅ PRO: Continuità verticale, insegnanti sanno su cosa costruire
- ❌ CONTRO: Riduce flessibilità insegnante, pressione su performance

**Raccomandazione Rex**: PROCEDI - Il beneficio supera il rischio. MA implementa gradualmente (pilota 1-2 gradi).

---

### ONE-WAY DOOR 2: Standardizzare Conseguenze Comportamentali

**Decisione**: Progressive consequences framework diventa policy scuola (non autonomia insegnante).

**Perché è one-way door**:
- Cambia cultura da "teacher autonomy" a "institutional consistency"
- Famiglie si aspetteranno consistenza
- Difficile tornare a variabilità dopo standardizzazione

**Tradeoff**:
- ✅ PRO: Prevedibilità per studenti, sviluppo self-management
- ❌ CONTRO: Riduce autonomia insegnante su disciplina

**Raccomandazione Rex**: PROCEDI - Autonomia su conseguenze comportamentali è negoziabile (confermato convergenza). Beneficio studenti è priorità.

---

### ONE-WAY DOOR 3: Rendere Documentazione Toddle Non-Opzionale

**Decisione**: Documentazione minima su Toddle diventa requisito (non opzionale).

**Perché è one-way door**:
- Cambia aspettativa su workload insegnanti
- Diventa parte di valutazione performance
- Difficile tornare a "opzionale" senza perdere memoria istituzionale

**Tradeoff**:
- ✅ PRO: Memoria istituzionale, continuità con turnover
- ❌ CONTRO: Aumenta carico percepito (anche se AI riduce tempo effettivo)

**Raccomandazione Rex**: PROCEDI CON CAUTELA - Implementa SOLO dopo training AI tools. Dimostra che riduce tempo (non aumenta).

---

## FRAMEWORK ARCHITECTURE

### LAYER 1: GUARANTEED CURRICULUM (Cosa deve essere garantito)

```
┌─────────────────────────────────────────────────────────────┐
│ GUARANTEED CURRICULUM FRAMEWORK                             │
│ "Minimo garantito che ogni studente padroneggia"           │
└─────────────────────────────────────────────────────────────┘

Per ogni grado (K-8), definire:

1. COMPETENZE LINGUISTICHE (Italian + English)
   ├─ Target CEFR (italiano)
   ├─ 4 competenze (listening, reading, speaking, writing)
   └─ Assessment end-of-year (incluso orale)

2. COMPETENZE MATEMATICHE
   ├─ Concetti core (allineati IB PYP)
   ├─ Problem-solving skills
   └─ Assessment end-of-year

3. SELF-MANAGEMENT SKILLS
   ├─ Routine di lavoro autonomo
   ├─ Organizzazione materiali
   ├─ Time management
   └─ Observable behaviors (rubrica)

4. CONOSCENZE CONTENUTISTICHE (IB PYP)
   ├─ Key concepts per UoI
   ├─ Transdisciplinary themes
   └─ Assessment formativo/sommativo
```

**Implementazione**:
- Vertical teams K-8 definiscono expectations (1 meeting per area)
- Documentato su Toddle (template standard)
- Comunicato a famiglie inizio anno
- Assessment end-of-year verifica padronanza

**Timeline**: Anno 1 (2026-27) - Pilota grade 1-2-3. Anno 2 (2027-28) - Scala K-8.

---

### LAYER 2: VERTICAL ALIGNMENT STRUCTURES (Come garantiamo continuità)

```
┌─────────────────────────────────────────────────────────────┐
│ VERTICAL ALIGNMENT PROTOCOL                                 │
│ "Come conoscenza passa da grado a grado"                    │
└─────────────────────────────────────────────────────────────┘

STRUTTURA 1: Vertical Teams K-8
├─ Composizione: 1 insegnante per grado (K-8) + IB Coordinator
├─ Frequenza: 2x per anno (settembre + marzo)
├─ Durata: 2 ore
├─ Agenda:
│   ├─ Review "guaranteed curriculum" per area
│   ├─ Identificare gaps/overlaps
│   ├─ Aggiustare progressione se necessario
│   └─ Condividere best practices
└─ Output: Aggiornamenti su Toddle

STRUTTURA 2: Handoff Meetings (Gradi Consecutivi)
├─ Composizione: Insegnante grade N + insegnante grade N+1
├─ Frequenza: 1x per anno (maggio/giugno)
├─ Durata: 1 ora per classe
├─ Agenda:
│   ├─ Review: Cosa è stato effettivamente coperto
│   ├─ Studenti: Chi ha padroneggiato cosa
│   ├─ Gaps: Cosa non è stato completato
│   ├─ Special needs: Studenti con bisogni specifici
│   └─ Raccomandazioni per anno successivo
└─ Output: Handoff document su Toddle

STRUTTURA 3: Beginning-of-Year Assessment
├─ Timing: Prima settimana di scuola
├─ Scopo: Verificare baseline studenti
├─ Aree: Linguistico (CEFR), matematico, self-management
└─ Output: Dati per differenziazione
```

**Tempo richiesto**:
- Vertical teams: 4 ore/anno per insegnante
- Handoff meetings: 1 ora/anno per insegnante
- **Totale: 5 ore/anno** (gestibile)

---

### LAYER 3: HORIZONTAL ALIGNMENT (Coerenza dentro il grado)

```
┌─────────────────────────────────────────────────────────────┐
│ GRADE-LEVEL TEAM PROTOCOL                                   │
│ "Coerenza tra classi dello stesso grado"                    │
└─────────────────────────────────────────────────────────────┘

STRUTTURA: Grade-Level Meetings
├─ Composizione: Tutti insegnanti dello stesso grado
├─ Frequenza: 1x per ciclo (ogni 6 giorni) - GIÀ ESISTE
├─ Durata: 1 ora
├─ Agenda (standardizzata):
│   ├─ Week 1 ciclo: UoI planning & alignment
│   ├─ Week 2 ciclo: Student progress & differentiation
│   ├─ Week 3 ciclo: Assessment & documentation
│   ├─ Week 4 ciclo: Behavior & self-management
│   ├─ Week 5 ciclo: Family communication
│   └─ Week 6 ciclo: Reflection & adjustments
└─ Output: Shared notes su Toddle

50% STANDARDIZZATO (tutti i gradi):
├─ Daily routines (inizio giornata, merenda, parco, pranzo, dismissal)
├─ Behavioral expectations (4 Accordi + progressive consequences)
├─ Organization systems (quaderni, cartelle, homework)
└─ Transition protocols

50% FLESSIBILE (autonomia insegnante):
├─ UoI implementation (percorsi di esplorazione)
├─ Materiali specifici
├─ Stile pedagogico
└─ Tempi di approfondimento
```

**Nota**: Questo NON aggiunge tempo (meeting già esiste). Aggiunge STRUTTURA all'agenda.

---

### LAYER 4: SPECIALIST INTEGRATION (Homeroom ↔ Specialist)

```
┌─────────────────────────────────────────────────────────────┐
│ HOMEROOM-SPECIALIST COLLABORATION PROTOCOL                  │
│ "Come specialisti si integrano con curriculum homeroom"     │
└─────────────────────────────────────────────────────────────┘

STRUTTURA: UoI Integration Meetings
├─ Composizione: Grade-level team + Specialists
├─ Frequenza: 1x per UoI (inizio) = ~6x per anno
├─ Durata: 45 minuti
├─ Timing: 2 settimane prima inizio UoI
├─ Agenda:
│   ├─ Homeroom presenta: Central idea, lines of inquiry
│   ├─ Specialists propongono: Collegamenti con loro area
│   ├─ Co-planning: Attività integrate
│   ├─ Linguistic integration: Come specialisti supportano italiano
│   └─ Timeline: Quando integrazione avviene
└─ Output: Integration plan su Toddle

MODELLI DI INTEGRAZIONE (per specialist area):

PE (Physical Education):
└─ Model: Station Teaching
    ├─ Homeroom + PE co-teach
    ├─ Stazioni diverse (movimento + contenuto UoI)
    └─ Lingua: Mix italiano/inglese

Arte:
└─ Model: Team Teaching
    ├─ Arte supporta "100 linguaggi" (Reggio)
    ├─ Progetti collegati a UoI
    └─ Lingua: Principalmente inglese, vocabolario italiano per materiali

Musica:
└─ Model: Parallel Teaching (già 50/50 italiano/inglese)
    ├─ Canzoni/ritmi collegati a UoI themes
    └─ Supporta sviluppo linguistico

Tech:
└─ Model: One Teach, One Assist
    ├─ Tech supporta research per UoI
    └─ Lingua: Inglese (tech vocabulary)

SEL (Social Emotional Learning):
└─ Model: Alternative Teaching
    ├─ Piccoli gruppi per self-management skills
    └─ Collegato a 4 Accordi

Environmental Science:
└─ Model: Team Teaching
    ├─ Inquiry-based, allineato con UoI
    └─ Lingua: Inglese
```

**Tempo richiesto**:
- 45 min × 6 UoI = 4.5 ore/anno per specialist
- **Gestibile** (meno di 1 ora/mese)

**🚨 CRITICAL**: Questo tempo deve essere PROTETTO (non sacrificabile per altre iniziative).

---

### LAYER 5: BEHAVIORAL CONSISTENCY (Self-Management Development)

```
┌─────────────────────────────────────────────────────────────┐
│ PROGRESSIVE CONSEQUENCES FRAMEWORK                          │
│ "Prevedibilità per sviluppo self-management"               │
└─────────────────────────────────────────────────────────────┘

FOUNDATION: 4 Accordi (GIÀ ESISTENTI)
├─ Responsabilità
├─ Rispetto
├─ Collaborazione
└─ Empatia

PROGRESSIVE CONSEQUENCES (STANDARDIZZATO):

STEP 1: Prima volta (stesso comportamento)
├─ Riflessione (scritta + disegno)
├─ Discussione con insegnante
├─ Identificare quale Accordo è stato rotto
└─ Piano per comportamento futuro

STEP 2: Seconda volta (entro 2 settimane)
├─ Riflessione (scritta + disegno)
├─ Logical Consequence (collegata al comportamento):
│   ├─ "You break it, you fix it" (ripara danno)
│   ├─ Loss of privilege (temporaneo, collegato)
│   └─ Safe space (time to regroup)
└─ Discussione: Perché riflessione non è stata efficace?

STEP 3: Terza volta (entro 2 settimane)
├─ Riflessione + Logical Consequence
├─ Comunicazione famiglia (email template standard)
├─ Meeting insegnante-famiglia (opzionale)
└─ Check-in giornaliero per 1 settimana

STEP 4: Quarta volta (pattern persistente)
├─ Piano comportamentale formale
├─ Coinvolgimento Learning Specialist
├─ Meeting insegnante-famiglia-specialist
├─ Supporto aggiuntivo (se bisogni specifici)
└─ Review settimanale progressi

DOCUMENTATION:
├─ Ogni riflessione documentata su Toddle
├─ Famiglie possono vedere storico
├─ Trasparenza su progressione
└─ Dati per identificare pattern
```

**FLESSIBILITÀ PRESERVATA**:
- Insegnante sceglie QUALE logical consequence (tra le 3 opzioni)
- Insegnante decide durata loss of privilege
- Insegnante adatta linguaggio riflessione a età studente

**STANDARDIZZATO**:
- Progressione 1→2→3→4 è fissa
- Comunicazione famiglia a Step 3 è obbligatoria
- Coinvolgimento specialist a Step 4 è obbligatorio

**Beneficio studenti**: Prevedibilità ("So cosa succede se...")  
**Beneficio insegnanti**: Framework chiaro, supporto istituzionale  
**Beneficio famiglie**: Trasparenza, linguaggio comune

---

### LAYER 6: DOCUMENTATION & INSTITUTIONAL MEMORY

```
┌─────────────────────────────────────────────────────────────┐
│ MINIMAL VIABLE DOCUMENTATION SYSTEM                         │
│ "Cosa DEVE essere documentato (minimo essenziale)"          │
└─────────────────────────────────────────────────────────────┘

PRINCIPIO: Documentare SOLO ciò che serve per continuità.

TIER 1: OBBLIGATORIO (Non-opzionale)
├─ UoI Planning (su Toddle):
│   ├─ Central idea
│   ├─ Lines of inquiry
│   ├─ Key concepts
│   └─ Assessment plan
│
├─ UoI Implementation Summary (end of unit):
│   ├─ Cosa è stato effettivamente coperto (vs pianificato)
│   ├─ Quanto tempo dedicato a ogni line of inquiry
│   ├─ Student engagement highlights
│   └─ Adjustments fatti e perché
│   [TEMPO: 10-15 min con AI voice-to-text]
│
├─ End-of-Year Summary (per grado):
│   ├─ "Guaranteed curriculum" - cosa è stato padroneggiato
│   ├─ Gaps identificati
│   ├─ Raccomandazioni per anno successivo
│   └─ Student-specific notes (bisogni specifici)
│   [TEMPO: 30 min con AI]
│
└─ Behavioral Documentation:
    ├─ Riflessioni (già fatto)
    ├─ Progressive consequences (Step 2-4)
    └─ Comunicazioni famiglia

TIER 2: RACCOMANDATO (Opzionale ma utile)
├─ Student portfolios (foto + narrativa)
├─ Learning stories (Reggio documentation)
├─ Assessment rubrics
└─ Family communication weekly

TIER 3: OPZIONALE (Nice to have)
├─ Detailed lesson plans
├─ Daily reflections
└─ Extensive photo documentation
```

**AI-ASSISTED WORKFLOW** (riduce carico):

```
WORKFLOW TRADIZIONALE (30-45 min):
1. Ricordare cosa è successo
2. Scrivere summary
3. Organizzare pensieri
4. Formattare per Toddle
5. Upload

WORKFLOW AI-ASSISTED (5-10 min):
1. Voice recording durante/dopo lezione (2-3 min)
   └─ "Oggi abbiamo esplorato... studenti hanno mostrato interesse in... 
       ho notato che... prossimi passi..."
2. AI transcription (automatico)
3. AI summary + key points (ChatGPT, Toddle AI)
4. Review & edit (2-3 min)
5. Copy-paste su Toddle (1 min)

RISPARMIO: 20-35 minuti per documentation
```

**TRAINING NECESSARIO**:
- Workshop 1 (1 ora): Toddle AI features
- Workshop 2 (1 ora): Voice-to-text workflow
- Practice session (30 min): Hands-on con AI tools

**ROI**:
- 3 ore training iniziale
- Risparmio 20-35 min per UoI documentation
- 6 UoI/anno × 25 min = 150 min risparmiati/anno
- **Break-even dopo 1 UoI**

---

### LAYER 7: CEFR LANGUAGE PROGRESSION K-8

```
┌─────────────────────────────────────────────────────────────┐
│ ITALIAN LANGUAGE PROGRESSION FRAMEWORK                      │
│ "Target CEFR per ogni grado + assessment"                   │
└─────────────────────────────────────────────────────────────┘

PROGRESSIONE K-8 (basata su Argy research):

| Grado | Target CEFR | Descrizione | Assessment |
|-------|-------------|-------------|------------|
| K | Pre-A1 | Exposure, comprehension, basic vocabulary | Observation rubric |
| 1 | A1 (emerging) | Simple phrases, basic needs | CILS Bambini (adapted) |
| 2 | A1 (consolidating) | Everyday expressions, personal info | CILS Bambini + oral |
| 3 | A2 (emerging) | Simple conversations, familiar topics | CILS Bambini + oral |
| 4 | A2 (consolidating) | Describe experiences, express opinions | CILS Ragazzi + oral |
| 5 | B1 (emerging) | Manage everyday situations, express opinions | CILS Ragazzi + oral |
| 6 | B1 (consolidating) | Understand main points, connected text | CILS Ragazzi + oral |
| 7 | B1+ / B2 (emerging) | Interact with fluency, detailed text | CILS Ragazzi + oral |
| 8 | B2 (target) | Fluent interaction, complex topics | CILS Adolescenti + oral |

4 COMPETENZE (tutte valutate):
├─ Listening (Ascolto)
├─ Reading (Lettura)
├─ Speaking (Produzione orale) ← CRITICO (attualmente mancante)
└─ Writing (Produzione scritta)

INTEGRAZIONE CON CURRICULUM:
├─ Obiettivi linguistici integrati in UoI (non separati)
├─ Specialist support (Musica 50/50, altri in inglese)
├─ Assessment end-of-year (maggio)
└─ Documentato su Toddle (progressione visibile a famiglie)
```

**IMPLEMENTAZIONE**:
- Anno 1 (2026-27): Definire progressione dettagliata K-8
- Anno 1 (2026-27): Pilota assessment completo (incluso orale) grade 2-5
- Anno 2 (2027-28): Scala assessment K-8
- Allineato con nuovo curriculum (indicazioni ministeriali + CEFR)

**Questo risolve**:
- Gap Critico 2 (Convergenza): Obiettivi linguistici non definiti
- Rende linguaggio "non sacrificabile" (chiaro come IB)

---

## IMPLEMENTATION ROADMAP

### FASE 1: QUICK WINS (Settembre-Dicembre 2026)

**Obiettivo**: Dimostrare ROI rapidamente per mantenere buy-in.

**Quick Win 1: AI-Assisted Documentation Training** (Settembre 2026)
├─ 3 ore training (2 workshop + 1 practice)
├─ Pilota con 5-6 insegnanti volontari
├─ Misurare: Tempo risparmiato per documentation
└─ Risultato atteso: 20-35 min risparmiati per UoI

**Quick Win 2: Progressive Consequences Framework** (Ottobre 2026)
├─ Standardizzare 4-step framework
├─ Template riflessioni + comunicazione famiglia
├─ Implementazione K-8 (semplice, non richiede planning time)
└─ Risultato atteso: Riduzione behavioral issues, più prevedibilità

**Quick Win 3: Homeroom-Specialist Integration (1 UoI)** (Novembre 2026)
├─ Pilota integration meeting per 1 UoI
├─ Grade 3 + tutti specialists (test case)
├─ Misurare: Qualità integrazione, feedback insegnanti
└─ Risultato atteso: Specialists più connessi, studenti vedono collegamenti

**Metriche Quick Wins**:
- Tempo risparmiato (documentation)
- Behavioral incidents (riduzione)
- Teacher satisfaction (survey)
- Student engagement (observation)

---

### FASE 2: STRUCTURAL FOUNDATIONS (Gennaio-Giugno 2027)

**Obiettivo**: Costruire strutture permanenti.

**Foundation 1: Guaranteed Curriculum (Pilota Grade 1-2-3)**
├─ Gennaio-Febbraio: Vertical teams definiscono expectations
├─ Marzo-Aprile: Comunicazione a famiglie
├─ Maggio: End-of-year assessment
└─ Giugno: Handoff meetings (grade 1→2, 2→3, 3→4)

**Foundation 2: CEFR Progression K-8**
├─ Gennaio-Marzo: Definire progressione dettagliata
├─ Aprile: Training insegnanti su assessment orale
├─ Maggio: Pilota assessment completo (grade 2-5)
└─ Giugno: Review & adjustments

**Foundation 3: Vertical Alignment Structures**
├─ Marzo: Primo vertical team meeting (review year)
├─ Maggio-Giugno: Handoff meetings tutti i gradi
└─ Documentazione su Toddle

**Metriche Fase 2**:
- Guaranteed curriculum definito (3 gradi)
- CEFR progression documentata (K-8)
- Handoff meetings completati (100%)
- Teacher feedback (qualitativo)

---

### FASE 3: SCALE & REFINE (Anno Scolastico 2027-28)

**Obiettivo**: Scalare a tutta la scuola, raffinare basandosi su feedback.

**Scale 1: Guaranteed Curriculum K-8**
├─ Settembre: Estendere a tutti i gradi (K, 4-8)
├─ Durante anno: Monitoring implementation
└─ Maggio: Assessment end-of-year tutti i gradi

**Scale 2: CEFR Assessment K-8**
├─ Settembre: Assessment beginning-of-year (baseline)
├─ Maggio: Assessment end-of-year (progressione)
└─ Dati per valutare efficacia immersion program

**Scale 3: Homeroom-Specialist Integration**
├─ Tutte le UoI, tutti i gradi
├─ Integration meetings protetti nel calendario
└─ Review efficacia ogni trimestre

**Refine**:
├─ Adjustments basati su feedback Anno 1
├─ Semplificare processi dove possibile
├─ Identificare best practices da condividere
└─ Celebrare successi

---

## RESOURCE REQUIREMENTS

### TEMPO (Insegnanti)

**Anno 1 (2026-27) - Setup**:
├─ Training AI tools: 3 ore (one-time)
├─ Vertical teams: 4 ore/anno
├─ Handoff meetings: 1 ora/anno
├─ UoI integration (pilota): 2-3 ore/anno
└─ **TOTALE: ~10-11 ore Anno 1**

**Anno 2+ (2027-28) - Maintenance**:
├─ Vertical teams: 4 ore/anno
├─ Handoff meetings: 1 ora/anno
├─ UoI integration: 4.5 ore/anno
└─ **TOTALE: ~9-10 ore/anno**

**RISPARMIO (da AI documentation)**:
- 150 minuti/anno = 2.5 ore/anno
- **NET: +7-8 ore Anno 1, +6-7 ore Anno 2+**

**Questo è gestibile** (Convergenza: 2 ore/settimana disponibili SE ROI chiaro).

---

### BUDGET

**Anno 1 (2026-27)**:
├─ AI tools: $0 (Toddle AI incluso, ChatGPT free tier)
├─ Training: $0 (interno, Pedagogical Leadership Team)
├─ Consultant: $0 (non necessario)
├─ Materials: $500 (template printing, materials)
└─ **TOTALE: ~$500**

**Anno 2+ (2027-28)**:
├─ Maintenance: $0
├─ CILS assessment: $50/studente × 100 studenti = $5,000
└─ **TOTALE: ~$5,000/anno**

**Questo è compatibile con budget limitato** (Convergenza Non-Negoziabile 4).

**SE risorse diventano disponibili 2027** (Convergenza):
- Priorità 1: Compenso insegnanti per vertical teams/handoff
- Priorità 2: AI tools premium (se necessario)
- Priorità 3: External coach per support

---

## RISK MITIGATION

### RISCHIO 1: Tempo/Risorse Insufficienti (Convergenza Risposta 20)

**Mitigazione**:
- ✅ Phased rollout (pilota → scala)
- ✅ Quick wins dimostrano ROI rapidamente
- ✅ AI riduce carico (non aumenta)
- ✅ Leverage existing structures (non inventare nuovo)

**Contingency**: Se tempo insufficiente, rallentare Fase 2 (estendere a 2 anni).

---

### RISCHIO 2: Complessità Implementazione (Convergenza Risposta 20)

**Mitigazione**:
- ✅ Minimal viable structure (non "perfetto")
- ✅ Templates e workflow chiari
- ✅ Training hands-on (non solo teoria)
- ✅ Support continuo (Pedagogical Leadership Team)

**Contingency**: Se troppo complesso, semplificare (es. ridurre frequency meetings).

---

### RISCHIO 3: Resistenza Insegnanti

**Mitigazione**:
- ✅ Co-create con insegnanti (non top-down puro)
- ✅ Pilota con volontari (non forzare)
- ✅ Celebrare early wins
- ✅ Ascoltare feedback e adjustare

**Contingency**: Se resistenza alta, rallentare e aumentare coinvolgimento insegnanti in design.

---

### RISCHIO 4: Perdita Identità (Calore, Community)

**Mitigazione**:
- ✅ 50/50 standardization (preserva autonomia)
- ✅ Strutture ABILITANO cura personalizzata (non la sostituiscono)
- ✅ Riduzione carico = più tempo per relazioni
- ✅ Comunicare: "Strutture servono studenti, non burocrazia"

**Contingency**: Se percezione negativa, aumentare comunicazione su "perché" (benefici studenti).

---

## SUCCESS METRICS

### STUDENTI (Convergenza Risposta 16)

**Metric 1: Self-Management**
├─ Baseline: Tempo per compiti semplici (es. prendere quaderno, scrivere data)
├─ Target: Riduzione 50% entro fine Anno 2
└─ Measurement: Observation rubric (inizio/fine anno)

**Metric 2: Transizioni**
├─ Baseline: Tempo adattamento inizio anno (settimane)
├─ Target: Riduzione da 4-6 settimane a 2-3 settimane
└─ Measurement: Teacher survey + behavioral data

**Metric 3: Progressione Linguistica**
├─ Baseline: CILS scores (senza orale)
├─ Target: 80% studenti raggiungono target CEFR per grado
└─ Measurement: CILS + oral assessment (end-of-year)

---

### INSEGNANTI (Convergenza Risposta 16)

**Metric 1: Tempo Speso su Gap-Filling**
├─ Baseline: Survey "Quanto tempo spendi a colmare gap vs insegnare nuovo?"
├─ Target: Riduzione 30% entro fine Anno 2
└─ Measurement: Teacher survey (trimestrale)

**Metric 2: Chiarezza Obiettivi**
├─ Baseline: Survey "Quanto sono chiari obiettivi linguistici?"
├─ Target: 90% insegnanti "molto chiaro" o "chiaro"
└─ Measurement: Teacher survey (end-of-year)

**Metric 3: Satisfaction**
├─ Baseline: Overall satisfaction con strutture continuità
├─ Target: 80% insegnanti "soddisfatto" o "molto soddisfatto"
└─ Measurement: Anonymous survey (end-of-year)

---

### GENITORI (Convergenza Risposta 16)

**Metric 1: Comprensione Progressione**
├─ Baseline: Survey "Quanto capisci progressione di tuo figlio?"
├─ Target: 85% genitori "bene" o "molto bene"
└─ Measurement: Parent survey (end-of-year)

**Metric 2: Percezione Consistenza**
├─ Baseline: Survey "Quanto è consistente esperienza anno-dopo-anno?"
├─ Target: 80% genitori "consistente" o "molto consistente"
└─ Measurement: Parent survey (end-of-year)

**Metric 3: Linguaggio Comune**
├─ Baseline: Survey "Capisci aspettative comportamentali?"
├─ Target: 90% genitori "chiaro" o "molto chiaro"
└─ Measurement: Parent survey (trimestrale)

---

## DECISION GATES

### GATE 1: Approvazione Framework (ORA)

**Decisione richiesta**:
- ✅ Approvare architettura generale?
- ✅ Approvare 3 ONE-WAY DOORS?
- ✅ Approvare phased rollout (3 fasi)?

**Stakeholder**: Head of School + Division Directors

---

### GATE 2: Go/No-Go Fase 2 (Dicembre 2026)

**Criteri**:
- Quick Wins hanno dimostrato ROI?
- Teacher feedback è positivo?
- Risorse sono disponibili per Fase 2?

**Decisione**: Procedere con Fase 2 o rallentare?

---

### GATE 3: Go/No-Go Scale (Giugno 2027)

**Criteri**:
- Pilota (grade 1-2-3) ha funzionato?
- Metrics mostrano miglioramento?
- Insegnanti supportano scaling?

**Decisione**: Scalare a K-8 o estendere pilota?

---

## REX ARCHITECTURE COMPLETE

**Status**: PROPOSAL (requires validation)

**Prossimi passi**:
1. **Review con Claudia**: Feedback su architettura
2. **Validation con stakeholders**: Head of School, Division Directors
3. **Refinement**: Adjustments basati su feedback
4. **Approval**: Go/No-Go su ONE-WAY DOORS
5. **Anky Validation**: Assessment formale del framework

**Rex session complete**.  
**Timestamp**: 2026-02-15 11:21  
**Status**: AWAITING VALIDATION
