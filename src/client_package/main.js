const ui = new WebUIWindow('survival_garrigue_ui', 'package://survival_garrigue/ui/index.html', new Vector2(jcmp.viewportSize.x, jcmp.viewportSize.y));
ui.autoResize = true;


jcmp.events.AddRemoteCallable('set_player_ability', (ability, state) => {
  jcmp.localPlayer.SetAbilityEnabled(ability, state);
})




