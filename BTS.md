# Beneath the Surface — A Multiplayer Descent Into Medieval Horror

**Beneath the Surface** is a four-player cooperative horror adventure set in a dark medieval world where kingdoms send explorers into ever-deepening, ever-shifting dungeon systems. Inspired by *Lethal Company*, *Pilgrim*, and *Phasmophobia*, the game blends procedural dungeon generation, team-based survival, and high-tension encounters to create a uniquely claustrophobic and unpredictable experience.

At its core, the game asks a simple question:

**How deep are you willing to go when the darkness starts looking back?**

---

## **The Premise**

In a fractured world ruled by distant kingdoms, ancient dungeons have begun resurfacing—labyrinths of stone and shadow that grow deeper and more twisted each year. These kingdoms contract small teams of adventurers to descend into these shifting halls, recover relics, clear infestations, and survive long enough to bring their earnings home.

You and up to three friends are one such team.

Every expedition begins at the mouth of a procedural dungeon. A creaking elevator takes you down one floor at a time, each level generated from modular rooms, branching hallways, and unpredictable hazards. The deeper the descent, the higher the payout—and the higher the risk.

There are no guarantees beneath the surface. No maps. No second chances if your team is wiped out. Only the darkness, and what waits inside it.

---

## **Core Gameplay**

### **Cooperative Medieval Survival**
Players must rely on teamwork to navigate danger:
- Communicate threats  
- Share resources  
- Split tasks or stick together  
- Make critical choices about when to push deeper or retreat to safety

### **Procedural Dungeon Exploration**
Each floor is assembled from handcrafted modules, connected dynamically through an intelligent placement system that:
- Aligns entry/exit connectors  
- Checks for collisions  
- Ensures unique room layouts every run  
- Escalates threat and complexity with depth

### **Multiplayer-Focused Systems**
Built with Unity’s **Netcode for GameObjects** and **Unity Relay**, the game supports:
- Full four-player online co-op  
- Synced room generation  
- Networked object interaction (pickups, drops, physics)  
- Shared danger systems and enemy behavior

### **Depth as the Main Mechanic**
Every successful descent increases:
- Risk  
- Rarity of items  
- Threat level  
- Rewards upon extraction

The elevator binds the structure together—a safe zone, a checkpoint, and your only path back to the surface.

---

## **Visual & Atmospheric Style**

Developed using **Unity HDRP**, the game’s tone leans into:
- Heavy shadows and volumetric lighting  
- Torch-lit corridors  
- Dripping stone chambers  
- Dense fog and moody ambiences  
- Medieval gear, textures, and environmental storytelling

The visual language emphasizes vulnerability—your vision is limited, and danger is always one doorway away.

---

## **Narrative Themes**

### **Descent**
Going deeper is both literal and symbolic—each floor feels heavier, darker, more ancient.

### **Cooperation Under Pressure**
Your team’s greatest asset is trust. Panic, miscommunication, and split decisions have consequences.

### **Medieval Mystery & Ruin**
The dungeons weren’t built by the kingdoms that now exploit them. Their origins—and occupants—tell a story buried in stone.

### **Risk vs Reward**
Every descent forces the question:
**Do we turn back now, or gamble everything on one more floor?**

---

## **Technical Challenges & Solutions**

Developing *Beneath the Surface* required solving complex multiplayer and procedural-generation problems:

### **Dungeon Piece Misalignment**
Different clients initially saw different layouts.  
Solution: Synchronizing physics state using `Physics.SyncTransforms()` after teleportation events.

### **Object Pickup & Ownership**
Only the host could move objects correctly at first.  
Solution: Refined ownership transfer and networked transform code with Client Authority Logic.

### **Overlapping Pieces in New Projects**
A Unity physics update caused false collision detection.  
Solution: Enabling **Auto Sync Transforms** fixed the generator across projects.

### **Prefab Registration Errors**
Clients saw: *“NetworkPrefab could not be found.”*  
Solution: Revisiting runtime RPC calls and ensuring prefabs were registered consistently across scenes.

Each technical step strengthens the foundation for larger systems—AI, combat, loot distribution, and environmental hazards.

---

## **Why This Game Exists**

*Beneath the Surface* is built to explore:
- Cooperative tension  
- Emergent storytelling  
- Medieval fantasy blended with creeping horror  
- The emotional weight of descending into the unknown  

The project is both a fully realized indie game for Steam and a major capstone for my **IB Computer Science Internal Assessment**—demonstrating networking, procedural generation, physics systems, and asset creation.

It’s a passion project about courage, fear, and the fragile trust between players when the darkness starts to move.

---

## **Future Development**

### Upcoming features include:
- Enemy AI and ambush behavior  
- Expanded loot and upgrade systems  
- More room modules, traps, and secrets  
- Additional kingdom contracts  
- Voice and sound-driven horror systems  
- A refined progression loop built on risk and depth

As the world grows, the dungeons will become more alive—reacting, adapting, and watching.

**There is always something deeper.  
And it’s waiting.**

